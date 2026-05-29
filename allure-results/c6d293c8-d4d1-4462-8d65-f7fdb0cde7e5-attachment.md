# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: laptopPurchasePage.spec.js >> Login with Valid Credentials
- Location: tests\laptopPurchasePage.spec.js:7:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//h2[text()=\'Thank you for your purchase!\']')
Expected: "Thank you for your purchase!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//h2[text()=\'Thank you for your purchase!\']')

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome Abhirammmm":
        - /url: "#"
    - listitem
  - list:
    - listitem
    - listitem
    - listitem
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import {expect,test} from "@playwright/test"
  2  | import {LoginPage} from "../Pages/loginPage"
  3  | import {AddToCartPage} from "../Pages/addToCartPage"
  4  | import {PurchasePage} from "..//Pages/purchasePage"
  5  | const customerData=require('../util/CustomerDetails.json')
  6  | const data=require('../util/LogInCredentials.json')
  7  | test('Login with Valid Credentials',async({page})=>{
  8  |     const loginUsername=data[0].validUsername
  9  |     const loginPassword=data[0].validPassword
  10 |     const customerName=customerData[0].Name
  11 |     const customerCountrty=customerData[0].Country
  12 |     const customerCity=customerData[0].City
  13 |     const customerCard=customerData[0].CreditCard
  14 |     const month=customerData[0].Month
  15 |     const year=customerData[0].Year
  16 |     test.setTimeout(60000)
  17 |     const loginPage=new LoginPage(page)
  18 |     const addToCartPage=new AddToCartPage(page)
  19 |     const purchasePage=new PurchasePage(page)
  20 |     await loginPage.goto()
  21 |     await loginPage.loginbutton()
  22 |     await loginPage.login(loginUsername,loginPassword)
  23 |     await loginPage.clickLogin()
  24 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome Abhirammmm")
  25 |     //await expect(page).toHaveURL("https://www.demoblaze.com/")
  26 |     
  27 |     await addToCartPage.selectLaptopFn()
  28 |     await addToCartPage.addToCartFn()
  29 |     page.on('dialog',async dialog=>{ 
  30 |     await expect(dialog.message()).toBe('Product added.')
  31 |     await dialog.accept()
  32 |     })
  33 |     await addToCartPage.openCartFn()
  34 |    // await expect(page.locator("//td[text()='Sony vaio i5']")).toHaveText('Sony vaio i5')
  35 |     await expect(page.locator("//h2[text()='Products']")).toHaveText('Products')
  36 |     await purchasePage.purchaseFn(customerName,customerCountrty,customerCity,customerCard,month,year )
> 37 |     await expect(page.locator("//h2[text()='Thank you for your purchase!']")).toHaveText('Thank you for your purchase!')
     |                                                                               ^ Error: expect(locator).toHaveText(expected) failed
  38 | })
  39 | 
```