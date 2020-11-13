import { browser, by } from "protractor";
import { PageEl } from "../../../../Utility/PageEl";
import { BasePage } from "../../../BasePage";



export class LudoLego extends BasePage {

   public pagetitle = "Ludo LEGO® 40198 | Aspectos varios | Oficial LEGO® Shop ES"

   //Elements___________

   private ludoLego = new PageEl(by.css('h1[itemprop="name"]'));
   private quantityIncrease = new PageEl(by.css("button[data-test='quantity-increase']"));
   private addToBag = new PageEl(by.css("button[data-test='add-to-bag']"));
   private total = new PageEl(by.css('input[data-test="quantity-value"]'));


   //Funcional Methods_______
   async ItemPage(): Promise<string> {

      var el = await this.ludoLego.getElements();
      var text = await el[0].element(by.css("span[class='Markup__StyledMarkup-ar1l9g-0 hlipzx']")).getText();
      return text;
   }

   async IncreaseItemQuantity() {
      this.quantityIncrease.WaitAndClickElement();
   }

   async AddToBasket() {
      this.addToBag.WaitAndClickElement();
   }

   async totalItems(): Promise<string> {
      var s = await (await (await this.total.getElement()).getAttribute('value'));
      return s;
   }

   async GetTitlePage(): Promise<string> {
      var title = await browser.getTitle();
      return title;
  }


}