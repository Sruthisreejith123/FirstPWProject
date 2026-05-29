# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: monitorPurchasePage.spec.js >> Login with Valid Credentials
- Location: tests\monitorPurchasePage.spec.js:8:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Place order" [active] [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Place order" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]: "Total: 230"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 230 Name:" [ref=e13]': Sruthi
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]: India
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [ref=e19]: Bangaluru
          - generic [ref=e20]:
            - generic [ref=e21]: "Credit card:"
            - textbox "Credit card:" [ref=e22]: "1234567890"
          - generic [ref=e23]:
            - generic [ref=e24]: "Month:"
            - textbox "Month:" [ref=e25]: January
          - generic [ref=e26]:
            - generic [ref=e27]: "Year:"
            - textbox "Year:" [ref=e28]: "2026"
        - generic [ref=e30]:
          - button "Close" [ref=e31]
          - button "Purchase" [ref=e32]
  - text:             
  - navigation [ref=e33]:
    - generic [ref=e34]:
      - link "PRODUCT STORE" [ref=e35] [cursor=pointer]:
        - /url: index.html
        - img [ref=e36]
        - text: PRODUCT STORE
      - list [ref=e38]:
        - listitem [ref=e39]:
          - link "Home (current)" [ref=e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e41]: (current)
        - listitem [ref=e42]:
          - link "Contact" [ref=e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e44]:
          - link "About us" [ref=e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e46]:
          - link "Cart" [ref=e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e48]:
          - link "Log out" [ref=e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e50]:
          - link "Welcome Abhirammmm" [ref=e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e53]:
    - generic [ref=e54]:
      - heading "Products" [level=2] [ref=e55]
      - table [ref=e57]:
        - rowgroup [ref=e58]:
          - row "Pic Title Price x" [ref=e59]:
            - columnheader "Pic" [ref=e60]
            - columnheader "Title" [ref=e61]
            - columnheader "Price" [ref=e62]
            - columnheader "x" [ref=e63]
        - rowgroup [ref=e64]:
          - row "ASUS Full HD 230 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "ASUS Full HD" [ref=e68]
            - cell "230" [ref=e69]
            - cell "Delete" [ref=e70]:
              - link "Delete" [ref=e71] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e72]:
      - heading "Total" [level=2] [ref=e73]
      - heading "230" [level=3] [ref=e76]
      - button "Place Order" [ref=e77]
  - generic [ref=e79]:
    - generic [ref=e82]:
      - heading "About Us" [level=4] [ref=e83]
      - paragraph [ref=e84]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e87]:
      - heading "Get in Touch" [level=4] [ref=e88]
      - paragraph [ref=e89]: "Address: 2390 El Camino Real"
      - paragraph [ref=e90]: "Phone: +440 123456"
      - paragraph [ref=e91]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e95]:
      - img [ref=e96]
      - text: PRODUCT STORE
  - contentinfo [ref=e97]:
    - paragraph [ref=e98]: Copyright © Product Store
  - generic [ref=e101]:
    - heading "Thank you for your purchase!" [level=2] [ref=e107]
    - paragraph [ref=e108]:
      - text: "Id: 7034209"
      - text: "Amount: 230 USD"
      - text: "Card Number: 1234567890"
      - text: "Name: Sruthi"
      - text: "Date: 29/4/2026"
    - button "OK" [ref=e111]
```

# Test source

```ts
  1  | export class PurchasePage{
  2  | constructor(page){
  3  | this.page=page
  4  | 
  5  | this.placeOrder=page.locator("//button[text()='Place Order']")
  6  | this.customerName=page.locator("#name")
  7  | this.customerCountry=page.locator("#country")
  8  | this.customerCity=page.locator("#city")
  9  | this.customerCard=page.locator("#card")
  10 | this.customerMonth=page.locator("#month")
  11 | this.customerYear=page.locator("#year")
  12 | this.Purchase=page.locator("//button[text()='Purchase']")
  13 | this.Ok=page.locator("//button[text()='OK']")
  14 | }
  15 | async purchaseFn(customername,country,city,card,month,year){
  16 |     
  17 |     await this.placeOrder.click()
  18 |     await this.customerName.fill(customername)
  19 |     await this.customerCountry.fill(country)
  20 |     await this.customerCity.fill(city)
  21 |     await this.customerCard.fill(card)
  22 |     await this.customerMonth.fill(month)
  23 |     await this.customerYear.fill(year)
  24 |     await this.Purchase.click()
> 25 |     await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible({ timeout: 10000 });
     |     ^ ReferenceError: expect is not defined
  26 |     await this.Ok.click()
  27 | 
  28 | }}
  29 | 
  30 | 
  31 | 
  32 | 
```