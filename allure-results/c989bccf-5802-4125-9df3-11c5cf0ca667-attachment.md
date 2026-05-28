# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: phonePurchase.spec.js >> Login with Valid Credentials
- Location: tests\phonePurchase.spec.js:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
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
  9  |     this.clickAddToCart=page.locator("//a[(text()='Add to cart')]")
  10 |     this.openCart=page.locator("//a[text()='Cart')]")
  11 |     //alert
  12 | } 
  13 | async selectPhoneFn(){
  14 |     await this.selectPhone.click()
  15 | }
  16 | async selectLaptopFn(){
  17 |     await this.selectLaptopCategory.click()
  18 |     await this.selectLaptop.click()
  19 | }
  20 | async selectMonitorFn(){
  21 |     await this.selectMonitorCategory.click()
  22 |     await this.selectMonitor.click()
  23 | }
  24 | async addToCartFn(){
> 25 |     await this.clickAddToCart.click()
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  26 | }
  27 | async openCartFn(){
  28 |     await this.openCart.click()
  29 | }
  30 | }
  31 |     
```