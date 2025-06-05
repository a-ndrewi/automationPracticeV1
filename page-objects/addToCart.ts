import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class addToCart extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async addToCartMultipleItems(page){
        const addToCartItem1 = page.locator('.inventory_item_name', {hasText: "Sauce Labs Backpack"})
        await addToCartItem1.waitFor({state: 'visible'})
        await addToCartItem1.click()

        const addToCart1 = page.locator('.btn_primary').getByText("ADD TO CART")
        await addToCart1.click()
        await expect(page.locator('.shopping_cart_badge')).toHaveText("1")

        await page.locator('.inventory_details_back_button').click()
 
        const addToCartItem2 = page.locator('.inventory_item_name', {hasText: "Sauce Labs Onesie"})
        await addToCartItem2.waitFor({state: 'visible'})
        await addToCartItem2.click()

        const addToCart2 = page.locator('.btn_primary').getByText("ADD TO CART")
        await addToCart2.click()
        await expect(page.locator('.shopping_cart_badge')).toHaveText("2")

        const reachCart = page.locator('#shopping_cart_container').click()
        await page.locator('.btn_secondary').first().click()
        await expect(page.locator('.shopping_cart_badge')).toHaveText("1")
    
        await page.locator('#shopping_cart_container').click()

        await page.locator('.checkout_button', {hasText: "CHECKOUT"}).click()
    }
}