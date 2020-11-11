import { browser, by } from "protractor";
import { PageEl } from "../../../Utility/PageEl";
import { BasePage } from "../../BasePage"

export class BolsaCompraPage extends BasePage {

    public pagetitle = "Bolsa de la compra | LEGO Shop";


    //Elements______
    private CarItem = new PageEl(by.css('div[data-test="cart-item"]'));

    //Funcional Methods_____
    async DifferentItemsInBasket(): Promise<string> {

        var text = (await this.CarItem.size()).toString();
        return text;
    }

    async QuantityOfItems(): Promise<string> {

        var items = await this.CarItem.getElements();
        var itemQuantity = await (await items[0].element(by.css('p[class="Text__BaseText-aa2o0i-0 bSAEui"]'))).getText();

        return itemQuantity;
    }

    async NameItem(): Promise<string> {

        var items = await this.CarItem.getElements();
        var itemName = await (await items[0].element(by.css('div[class="CartLineItemDetailsstyles__TextWrapper-sc-1ff5qsp-8 fJuQUy"]'))
            .element(by.css('span[class="Markup__StyledMarkup-ar1l9g-0 hlipzx"]'))).getText();
        return itemName;
    }

    async PriceItem(): Promise<string> {

        var items = await this.CarItem.getElements();
        var iemPrice = await (await items[0].element(by.css('span[data-test="product-price"]'))).getText();
        return iemPrice;
    }

    async GetTitlePage(): Promise<string> {
        var title = await browser.getTitle();
        return title;
    }


}