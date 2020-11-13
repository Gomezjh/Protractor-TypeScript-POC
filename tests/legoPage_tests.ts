import { browser } from 'protractor';
import { LudoLego } from '../pages/Home/AspectosVarios/LudoLego/LudoLegoPage';
import { BolsaCompraPage } from '../pages/Home/BolsaDeLaCompra/BolsaCompraPage';
import { TresCincoAñosPage } from '../pages/Home/ComprarPor/Edad/3-5 años/3-5_años';
import { HomePage } from '../pages/Home/HomePage';


describe('Feature', () => {

    var homePage = new HomePage();
    var tresCincoAñosPage = new TresCincoAñosPage();
    var ludoLegoPage = new LudoLego();
    var bolsaCompraPage = new BolsaCompraPage();

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.driver.manage().deleteAllCookies();
        await homePage.OpenBrowser('https://www.lego.com/es-es');
        await homePage.AcceptPopUp();
        await homePage.AcceptCookies();

    })

    it('Filter by "Tipo De Producto" and "Precio"', async () => {

        expect(await homePage.GetTitlePage()).toBe(homePage.pagetitle);

        await homePage.SelectComprarPorButton()
        await homePage.SelectEdadButton();
        await homePage.SelectAgeFilter3_5();
        expect(await tresCincoAñosPage.AgeFilterApplied()).toBe('3-5 años');
        expect( await tresCincoAñosPage.GetTitlePage()).toBe(tresCincoAñosPage.pagetitle);
        

        await tresCincoAñosPage.FilterBykeyChains();
        await tresCincoAñosPage.FilterByPrice0_20();
        expect(await tresCincoAñosPage.NumberOfResults()).toBe('3');
        expect(await tresCincoAñosPage.NameOfResul(0)).toBe('Llavero con linterna de Darth Vader™ LEGO® Star Wars™')
        expect(await tresCincoAñosPage.NameOfResul(1)).toBe('Llavero con luz de Stormtrooper™ LEGO® Star Wars™')
        expect(await tresCincoAñosPage.NameOfResul(2)).toBe('Llavero con luz de ladrillo 1x2 LEGO® (Rojo)')

        //browser.sleep(5000);

    })

    it('Use the search box to find an item and add two units to the shopping bag Test', async () => {

        expect(await homePage.GetTitlePage()).toBe(homePage.pagetitle);

        await homePage.Searh("ludo lego");
        expect(await homePage.SuggestionOfSearchBox()).toBe("Ludo LEGO®");

        await homePage.SelectSuggestion();
        expect(await ludoLegoPage.ItemPage()).toBe("Ludo LEGO®")
        expect(await ludoLegoPage.GetTitlePage()).toBe(ludoLegoPage.pagetitle);
        
        await ludoLegoPage.IncreaseItemQuantity();
        await ludoLegoPage.AddToBasket();
        expect (await ludoLegoPage.totalItems()).toBe("2");

        await homePage.GoToMyBag();
        expect(bolsaCompraPage.GetTitlePage()).toBe(bolsaCompraPage.pagetitle)
        expect(await bolsaCompraPage.NameItem()).toBe('Ludo LEGO®');
        expect(await bolsaCompraPage.DifferentItemsInBasket()).toBe('1');
        expect(await bolsaCompraPage.QuantityOfItems()).toBe("Uds. 2");
        expect(await bolsaCompraPage.PriceItem()).toContain("39,99 €");


        //browser.sleep(5000)

    })

})