# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: laptopPurchase.spec.js >> Login with Valid Credentials
- Location: tests\laptopPurchase.spec.js:5:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//td[text()=\'Sony vaio i5\']')
Expected: "Sony vaio i5"
Error: strict mode violation: locator('//td[text()=\'Sony vaio i5\']') resolved to 2 elements:
    1) <td>Sony vaio i5</td> aka getByRole('cell', { name: 'Sony vaio i5' }).first()
    2) <td>Sony vaio i5</td> aka getByRole('cell', { name: 'Sony vaio i5' }).nth(1)

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//td[text()=\'Sony vaio i5\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome Abhirammmm" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Sony vaio i5 790 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Sony vaio i5" [ref=e37]
            - cell "790" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "Samsung galaxy s6" [ref=e44]
            - cell "360" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [ref=e47] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e48]:
            - cell [ref=e49]:
              - img [ref=e50]
            - cell "Samsung galaxy s6" [ref=e51]
            - cell "360" [ref=e52]
            - cell "Delete" [ref=e53]:
              - link "Delete" [ref=e54] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e55]:
            - cell [ref=e56]:
              - img [ref=e57]
            - cell "Samsung galaxy s6" [ref=e58]
            - cell "360" [ref=e59]
            - cell "Delete" [ref=e60]:
              - link "Delete" [ref=e61] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e62]:
            - cell [ref=e63]:
              - img [ref=e64]
            - cell "Samsung galaxy s6" [ref=e65]
            - cell "360" [ref=e66]
            - cell "Delete" [ref=e67]:
              - link "Delete" [ref=e68] [cursor=pointer]:
                - /url: "#"
          - row "Sony vaio i5 790 Delete" [ref=e69]:
            - cell [ref=e70]:
              - img [ref=e71]
            - cell "Sony vaio i5" [ref=e72]
            - cell "790" [ref=e73]
            - cell "Delete" [ref=e74]:
              - link "Delete" [ref=e75] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e76]:
            - cell [ref=e77]:
              - img [ref=e78]
            - cell "Samsung galaxy s6" [ref=e79]
            - cell "360" [ref=e80]
            - cell "Delete" [ref=e81]:
              - link "Delete" [ref=e82] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e83]:
            - cell [ref=e84]:
              - img [ref=e85]
            - cell "Samsung galaxy s6" [ref=e86]
            - cell "360" [ref=e87]
            - cell "Delete" [ref=e88]:
              - link "Delete" [ref=e89] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e90]:
      - heading "Total" [level=2] [ref=e91]
      - heading "3740" [level=3] [ref=e94]
      - button "Place Order" [ref=e95]
  - generic [ref=e97]:
    - generic [ref=e100]:
      - heading "About Us" [level=4] [ref=e101]
      - paragraph [ref=e102]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e105]:
      - heading "Get in Touch" [level=4] [ref=e106]
      - paragraph [ref=e107]: "Address: 2390 El Camino Real"
      - paragraph [ref=e108]: "Phone: +440 123456"
      - paragraph [ref=e109]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e113]:
      - img [ref=e114]
      - text: PRODUCT STORE
  - contentinfo [ref=e115]:
    - paragraph [ref=e116]: Copyright © Product Store
```

# Test source

```ts
  1  | import {expect,test} from "@playwright/test"
  2  | import {LoginPage} from "../Pages/loginPage"
  3  | import {AddToCartPage} from "../Pages/addToCartPage"
  4  | import {PurchasePage} from "..//Pages/purchasePage"
  5  | test('Login with Valid Credentials',async({page})=>{
  6  |     test.setTimeout(60000)
  7  |     const loginPage=new LoginPage(page)
  8  |     const addToCartPage=new AddToCartPage(page)
  9  |     const purchasePage=new PurchasePage(page)
  10 |     await loginPage.goto()
  11 |     await loginPage.loginbutton()
  12 |     await loginPage.login("Abhirammmm","mm@2014")
  13 |     await loginPage.clickLogin()
  14 |     await expect(page.locator("#nameofuser")).toHaveText("Welcome Abhirammmm")
  15 |     //await expect(page).toHaveURL("https://www.demoblaze.com/")
  16 |     
  17 |     await addToCartPage.selectLaptopFn()
  18 |     await addToCartPage.addToCartFn()
  19 |     page.on('dialog',async dialog=>{ 
  20 |     await expect(dialog.message()).toBe('Product added.')
  21 |     await dialog.accept()
  22 |     })
  23 |     await addToCartPage.openCartFn()
> 24 |     await expect(page.locator("//td[text()='Sony vaio i5']")).toHaveText('Sony vaio i5')
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  25 |     await purchasePage.purchaseFn()
  26 | 
  27 | })
  28 | 
```