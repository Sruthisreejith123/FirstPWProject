export class AddToCartPage{
    constructor(page){
    this.page=page
    this.selectPhone=page.locator("//a[(text()='Samsung galaxy s6')]")
    this.selectLaptopCategory=page.locator("//a[(text()='Laptops')]")
    this.selectLaptop=page.locator("//a[(text()='Sony vaio i5')]")
    this.selectMonitorCategory=page.locator("//a[(text()='Monitors')]")
    this.selectMonitor=page.locator("//a[(text()='ASUS Full HD')]")
    this.clickAddToCart=page.locator("//a[text()='Add to cart']")
    this.openCart=page.locator('#cartur')
    //alert
} 
async selectPhoneFn(){
    await this.selectPhone.click()
}
async selectLaptopFn(){
    await this.selectLaptopCategory.click()
    await this.selectLaptop.click()
}
async selectMonitorFn(){
    await this.selectMonitorCategory.click()
    await this.selectMonitor.click()
}
async addToCartFn(){
    await this.clickAddToCart.click()
}
async openCartFn(){
    await this.openCart.click()
}
}
    