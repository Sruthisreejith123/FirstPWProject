import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
import {AddToCartPage} from "../Pages/addToCartPage"
test('Login with Valid Credentials',async({page})=>{
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    const addToCartPage=new AddToCartPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login("Abhirammmm","mm@2014")
    await loginPage.clickLogin()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome Abhirammmm")
    //await expect(page).toHaveURL("https://www.demoblaze.com/")
    
    await addToCartPage.selectPhoneFn()
    await addToCartPage.addToCartFn()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
 })
    await addToCartPage.openCartFn()
    await expect(page.locator("//h2[text()='Products']")).toHaveText('Products')

})
