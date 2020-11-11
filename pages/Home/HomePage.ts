import { browser, by } from 'protractor';
import { PageEl } from '../../Utility/PageEl';
import { BasePage } from '../BasePage';


export class HomePage extends BasePage {


    public pagetitle = "Inicio | Oficial LEGO® Shop ES";

    //Elements__________________________________

    private continuarButton = new PageEl(by.css("button[data-test='age-gate-grown-up-cta']"));
    private acceptCookiesButton = new PageEl(by.css("button[class='Button__Base-sc-1jdmsyi-0 iEXjfw CookieBannerstyles__StyledButton-sc-1nn4qlf-7 hqhLKk']"));
    private headerDropDownButtons = new PageEl(by.css("span[class='MainBarstyles__MenuItemLabel-sc-1cg7sjw-9 fSPEDV']"));
    private edadButton = new PageEl(by.css("button[data-analytics-title='age']"));
    private edadFilters = new PageEl(by.css("li[class='sharedstyles__SubMenuItemWithImage-p0zpyg-12 iJbDOv']"));
    private searhBox = new PageEl(by.id("desktop-search-search-input"));
    private suggOfSearhBox = new PageEl(by.css("p[data-test='product-suggestion-name']"));
    private myBag = new PageEl(by.css("a[data-test='util-bar-cart']"));;



    //Funcional Methods________________________

    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    async SelectComprarPorButton() {
        await (await this.headerDropDownButtons.getElementByIndex(1)).WaitAndClickElement();
    }

    async SelectEdadButton() {
        await this.edadButton.WaitAndClickElement();
    }

    async SelectAgeFilter3_5() {
        await (await this.edadFilters.getElementByIndex(1)).WaitAndClickElement();
    }

    async AcceptPopUp() {
        await this.continuarButton.WaitAndClickElement();

    }

    async AcceptCookies() {
        await this.acceptCookiesButton.WaitAndClickElement();

    }

    async Searh(text) {

        await this.searhBox.EnterText(text);

    }

    async SuggestionOfSearchBox(): Promise<string> {

        var sug = await this.suggOfSearhBox.getText();
        return sug;
    }

    async SelectSuggestion() {
        await this.suggOfSearhBox.WaitAndClickElement();
    }

    async GoToMyBag() {

        await this.myBag.WaitAndClickElement();
    }

    async GetTitlePage(): Promise<string> {
        var title = await browser.getTitle();
        return title;
    }

}