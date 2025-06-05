import {Locator, expect, Page} from "@playwright/test"
import {HelperBase} from "./helperBase"
import { TIMEOUT } from "node:dns"

export class LoginPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async loginUsingUsernameAndPassword(username: string, password: string){
        const usingLoginModal = this.page.locator('.login_wrapper-inner')
        await usingLoginModal.getByRole('textbox', {name: "Username"}).fill(username)
        await usingLoginModal.getByRole('textbox', {name: "Password"}).fill(password)
        await usingLoginModal.getByRole('button', {name: "LOGIN"}).click()
        await expect(this.page.locator('.fa-shopping-cart')).toBeVisible()
    }

    async wrongLoginUsernameAndPassword(username: string, password: string){
        await this.page.locator('.bm-burger-button').click()
        await this.page.getByText('Logout').click()
        const usingLoginModal = this.page.locator('.login_wrapper-inner')
        await usingLoginModal.getByRole('textbox', {name: "Username"}).fill(username)
        await usingLoginModal.getByRole('textbox', {name: "Password"}).fill(password)
        await usingLoginModal.getByRole('button', {name: "LOGIN"}).click()
        await expect(this.page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible()
    }

}
