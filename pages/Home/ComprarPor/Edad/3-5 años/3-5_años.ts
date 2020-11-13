import { browser, by } from "protractor";
import { PageEl } from "../../../../../Utility/PageEl";
import { BasePage } from '../../../../BasePage';


export class TresCincoAñosPage extends BasePage {

    public pagetitle = "3-5 años | Edad | Oficial LEGO® Shop ES"

    //Elements_________
    private filters = new PageEl(by.css("div[class='Facet__Inner-sc-19egzrb-0 ifmyDU']"));
    private ageFilterpage = new PageEl(by.id('blt577794e81a39ba1b'));
    private filteredResults = new PageEl(by.css("h2[data-test='product-leaf-title']"));



    //Funcional Methods___________
    async FilterBykeyChains() {
        var filters = await this.filters.getElements()
        var tipoProductoOptions = filters[0];
        tipoProductoOptions.element(by.cssContainingText("span[data-test='checkbox-text", 'Llaveros')).click();
    }

    async FilterByPrice0_20() {
        var filters = await this.filters.getElements()
        var tipoProductoOptions = filters[1];
        await tipoProductoOptions.element(by.cssContainingText("span[data-test='checkbox-text", '0')).click();
    }

    async AgeFilterApplied(): Promise<String> {
        var text: String = await this.ageFilterpage.getText();
        return text;
    }

    async NumberOfResults(): Promise<String> {
        var results = await this.filteredResults.getElements();
        return results.length.toString();

    }

    async NameOfResul(n: any): Promise<String> {
        var results = await this.filteredResults.getElements();
        return results[n].getText();

    }

    async GetTitlePage(): Promise<string> {
        var title = await browser.getTitle();
        return title;
    }

}
