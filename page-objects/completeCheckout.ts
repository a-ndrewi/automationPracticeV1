import {Locator, Page, expect} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class completeCheckout extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async completeCheckout(firstname: string, lastname: string, zipcode: number){
        //await page.locator('.checkout_button', {hasText: "CHECKOUT"}).click()
        
        const checkoutInfo = this.page.locator('#checkout_info_container').isVisible()
        await this.page.locator('#first-name').fill(firstname)
        await this.page.locator('#last-name').fill(lastname)
        await this.page.locator('#postal-code').fill(zipcode.toString())
        await this.page.locator('[value="CONTINUE"]').click()

        await expect(this.page.locator('.summary_info_label', {hasText: "Payment Information"})).toBeTruthy()
        await this.page.locator('.btn_action', {hasText: "FINISH"}).click()
    }

    async completeCheckoutSecondPage(page){
        const finishCheckout = this.page.locator('.complete-header').isVisible()
        await expect(finishCheckout).toBeTruthy()
    }
}