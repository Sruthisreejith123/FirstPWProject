export class AddToCartPage{
    constructor(page){
    this.page=page
    this.selectPhone=page.locator("//a[(text()='Samsung galaxy s6')]")
    this.selectLaptopCategory=page.locator("//a[(text()='Laptops')]")
    this.selectLaptop=page.locator("//a[(text()='Sony vaio i7')]")
    this.selectMonitorCategory=page.locator("//a[(text()='Monitors')]")
    this.selectMonitor=page.locator("//a[(text()='ASUS Full HD')]")
    this.addToCart=page.locator("//a[(text()='Add to cart')]")
    //alert
    this.openCart=page.loactor("//a[text(='Cart')]")
    this.placeOrder=page.locator("//a[text()='Place Order']")
    this.customerName=page.locator("#name")
    this.customerCountry=page.locator("#country")
    this.customerCity=page.locator("#city")
    this.customerCard=page.locator("#card")
    this.customerMonth=page.locator("#month")
    this.customerYear=page.locator("#year")
    this.Purchase=page.locator("//button[text()='Purchase']")
    this.Ok=page.locator("//button[text()='OK']")
    

 } 
    
} 