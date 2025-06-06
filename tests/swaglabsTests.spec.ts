import {test, expect}  from "@playwright/test"
import {LoginPage} from "../page-objects/swaglabsLogin"
import { beforeEach } from "node:test"
import { addToCart } from "../page-objects/addToCart"
import { completeCheckout } from "../page-objects/completeCheckout"

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
})

test('performLogin', async({page}) => {
    const pm = new LoginPage(page)
    await pm.loginUsingUsernameAndPassword('standard_user', 'secret_sauce')
    await pm.wrongLoginUsernameAndPassword('test', 'test1')
})

test('addItemToCart', async({page}) => {
    const lg = new LoginPage(page)
    const pm = new addToCart(page)
    await lg.loginUsingUsernameAndPassword('standard_user', 'secret_sauce')
    await pm.addToCartMultipleItems(page)
})

test('checkoutComplete', async({page}) => {
    const lg = new LoginPage(page)
    const pm  = new addToCart(page)
    const cc = new completeCheckout(page)
    await lg.loginUsingUsernameAndPassword('standard_user', 'secret_sauce')
    await pm.addToCartMultipleItems(page)
    await cc.completeCheckout('Daniel', 'Mustafa', 61266)
})