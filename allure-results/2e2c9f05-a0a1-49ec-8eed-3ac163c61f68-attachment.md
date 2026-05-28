# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: phonePurchase.spec.js >> Login with Valid Credentials
- Location: tests\phonePurchase.spec.js:4:5

# Error details

```
TypeError: page.loactor is not a function
```

# Test source

```ts
  1  | export class AddToCartPage{
  2  |     constructor(page){
  3  |     this.page=page
  4  |     this.selectPhone=page.locator("//a[(text()='Samsung galaxy s6')]")
  5  |     this.selectLaptopCategory=page.locator("//a[(text()='Laptops')]")
  6  |     this.selectLaptop=page.locator("//a[(text()='Sony vaio i7')]")
  7  |     this.selectMonitorCategory=page.locator("//a[(text()='Monitors')]")
  8  |     this.selectMonitor=page.locator("//a[(text()='ASUS Full HD')]")
  9  |     this.addToCart=page.locator("//a[(text()='Add to cart')]")
  10 |     //alert
> 11 |     this.openCart=page.loactor("//a[text(='Cart')]")
     |                        ^ TypeError: page.loactor is not a function
  12 |     this.placeOrder=page.locator("//a[text()='Place Order']")
  13 |     this.customerName=page.locator("#name")
  14 |     this.customerCountry=page.locator("#country")
  15 |     this.customerCity=page.locator("#city")
  16 |     this.customerCard=page.locator("#card")
  17 |     this.customerMonth=page.locator("#month")
  18 |     this.customerYear=page.locator("#year")
  19 |     this.Purchase=page.locator("//button[text()='Purchase']")
  20 |     this.Ok=page.locator("//button[text()='OK']")
  21 |     
  22 | 
  23 |  } 
  24 |     
  25 | } 
```