import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
test.only('Login with Valid Credentials',async({page})=>{
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login("Abhirammmm","@2014")
    await loginPage.clickLogin()
   // await page.waitForLoadState("networkidle")
    //await expect(page.locator("#nameofuser")).toHaveText("Welcome Abhirammmm")
    await expect(page).toHaveURL("https://www.demoblaze.com/")
})
test('Login with invalid username and valid password',async({page})=>{
    const loginPage1=new LoginPage(page)
    await loginPage1.goto()
    await loginPage1.loginbutton()
    await loginPage1.login("Abhiram","mm@2014")
    await loginPage1.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })
 })   
test('Login with valid username and invalid password',async({page})=>{
    const loginPage2=new LoginPage(page)
    await loginPage2.goto()
    await loginPage2.loginbutton()
    await loginPage2.login("Abhirammmm","@2014")
    await loginPage2.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })
})

test('Login with invalid username and invalid password',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login("Abhiram","@2014")
    await loginPage.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })

})