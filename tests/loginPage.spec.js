import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
const data=require('../util/LogInCredentials.json')
test('Login with Valid Credentials',async({page})=>{
    const loginUsername=data[0].validUsername
    const loginPassword=data[0].validPassword
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login(loginUsername,loginPassword)
    await loginPage.clickLogin()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm')
    await expect(page).toHaveURL("https://www.demoblaze.com/")
})
test('Login with invalid username and valid password',async({page})=>{
    const loginUsername1=data[1].validUsername
    const loginPassword1=data[1].invalidPassword
    const loginPage1=new LoginPage(page)
    await loginPage1.goto()
    await loginPage1.loginbutton()
    await loginPage1.login(loginUsername1,loginPassword1)
    await loginPage1.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })
 })   
test('Login with valid username and invalid password',async({page})=>{
    const loginUsername2=data[2].invalidUsername
    const loginPassword2=data[2].validPassword
    const loginPage2=new LoginPage(page)
    await loginPage2.goto()
    await loginPage2.loginbutton()
    await loginPage2.login(loginUsername2,loginPassword2)
    await loginPage2.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })
})

test('Login with invalid username and invalid password',async({page})=>{
    const loginUsername3=data[3].invalidUsername
    const loginPassword3=data[3].invalidPassword
    const loginPage3=new LoginPage(page)
    await loginPage3.goto()
    await loginPage3.loginbutton()
    await loginPage3.login(loginUsername3,loginPassword3)
    await loginPage3.clickLogin()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
    })

})