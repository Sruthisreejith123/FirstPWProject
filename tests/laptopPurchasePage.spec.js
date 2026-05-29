import {expect,test} from "@playwright/test"
import {LoginPage} from "../Pages/loginPage"
import {AddToCartPage} from "../Pages/addToCartPage"
import {PurchasePage} from "..//Pages/purchasePage"
const customerData=require('../util/CustomerDetails.json')
const data=require('../util/LogInCredentials.json')
test('Login with Valid Credentials',async({page})=>{
    const loginUsername=data[0].validUsername
    const loginPassword=data[0].validPassword
    const customerName=customerData[0].Name
    const customerCountrty=customerData[0].Country
    const customerCity=customerData[0].City
    const customerCard=customerData[0].CreditCard
    const month=customerData[0].Month
    const year=customerData[0].Year
    test.setTimeout(60000)
    const loginPage=new LoginPage(page)
    const addToCartPage=new AddToCartPage(page)
    const purchasePage=new PurchasePage(page)
    await loginPage.goto()
    await loginPage.loginbutton()
    await loginPage.login(loginUsername,loginPassword)
    await loginPage.clickLogin()
    await expect(page.locator("#nameofuser")).toHaveText("Welcome Abhirammmm")
    //await expect(page).toHaveURL("https://www.demoblaze.com/")
    
    await addToCartPage.selectLaptopFn()
    await addToCartPage.addToCartFn()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
    })
    await addToCartPage.openCartFn()
   // await expect(page.locator("//td[text()='Sony vaio i5']")).toHaveText('Sony vaio i5')
    await expect(page.locator("//h2[text()='Products']")).toHaveText('Products')
    await purchasePage.purchaseFn(customerName,customerCountrty,customerCity,customerCard,month,year )
    await expect(page.locator("//h2[text()='Thank you for your purchase!']")).toHaveText('Thank you for your purchase!')
    await purchasePage.purchaseOk()
})

