export class PurchasePage{
constructor(page){
this.page=page

this.placeOrder=page.locator("//button[text()='Place Order']")
this.customerName=page.locator("#name")
this.customerCountry=page.locator("#country")
this.customerCity=page.locator("#city")
this.customerCard=page.locator("#card")
this.customerMonth=page.locator("#month")
this.customerYear=page.locator("#year")
this.Purchase=page.locator("//button[text()='Purchase']")
this.Ok=page.locator("//button[text()='OK']")
}
async purchaseFn(customername,country,city,card,month,year){
    
    await this.placeOrder.click()
    await this.customerName.fill(customername)
    await this.customerCountry.fill(country)
    await this.customerCity.fill(city)
    await this.customerCard.fill(card)
    await this.customerMonth.fill(month)
    await this.customerYear.fill(year)
    await this.Purchase.click()
    
}
async purchaseOk(){
    await this.Ok.click()
}}





