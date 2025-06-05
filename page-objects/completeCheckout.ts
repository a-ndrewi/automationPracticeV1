import {Locator, Page, expect} from "@playwright/test"
import { HelperBase } from "./helperBase"

export class completeCheckout extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async completeCheckout(page){
        //await page.locator('.checkout_button', {hasText: "CHECKOUT"}).click()
        
        const checkoutInfo = page.locator('.subheader').isVisible()
        await page.locator('#first-name').fill(String)
        await page.locator('#last-name').fill(String)
        await page.locator('#postal-code').fill(Number)
    }
}