import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
import {LogoutPage} from '../Pages/logoutPage'
const data=require('../util/LogInCredentials.json')
test('Login with Valid Credentials',async({page})=>{
    const loginUsername=data[0].validUsername
    const loginPassword=data[0].validPassword
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    const logoutPage=new LogoutPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login(loginUsername,loginPassword)
    await loginPage.clickLogin()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm')
    //await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm', { timeout: 10000 });
    //await expect(page).toHaveURL("https://www.demoblaze.com/")
    await logoutPage.logoutFn()
    await expect(page.locator('#signin2')).toHaveText('Sign up')
})