import { browser, element,  ElementFinder} from "protractor";
import { protractor } from "protractor/built/ptor";


export class PageEl {

    byEl: any;
    el: ElementFinder;
    index: number = 0;

    EC = protractor.ExpectedConditions;

    constructor(byEl: any) {
        this.byEl = byEl;
    }

    async WaitAndClickElement() {
        await (await this.getElement()).click();
    }

    async EnterText(text: string) {
        await (await this.getElement()).sendKeys(text);
    }

    async waitForElement() {
        await browser.wait(this.EC.elementToBeClickable(element(this.byEl)), 7000, 'Element did not found');
    }

    async getElement(): Promise<ElementFinder> {
        await this.waitForElement();
        if (this.index == 0) {
            this.el = element(this.byEl);
        } else {
            this.el = element.all(this.byEl).get(this.index);
        }
        return this.el;
    }

    async getElements(): Promise<ElementFinder[]> {
        await this.waitForElement();
        return element.all(this.byEl).asElementFinders_();
    }

    async size(): Promise<number> {
        return (await this.getElements()).length;
    }

    async getElementByIndex(index: number) {
        this.index = index;
        return this;
    }

    async getText(): Promise<string> {
        let text = await (await this.getElement()).getText();
        return text;
    }











}