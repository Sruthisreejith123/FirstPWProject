import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
import {LogoutPage} from '../Pages/logoutPage'
test('Login with Valid Credentials',async({page})=>{
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    const logoutPage=new LogoutPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login("Abhirammmm","mm@2014")
    await loginPage.clickLogin()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm')
    //await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm', { timeout: 10000 });
    //await expect(page).toHaveURL("https://www.demoblaze.com/")
    await logoutPage.logoutFn()
    await expect(page.locator('#signin2')).toHaveText('Sign up')
})