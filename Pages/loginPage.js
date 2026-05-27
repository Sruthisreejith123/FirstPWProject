export class LoginPage{
   constructor(page){
    this.page=page
    this.loginButton=page.locator("#login2")
    this.loginUsername=page.locator("#loginusername")
    this.loginPassword=page.locator("#loginpassword")
    this.loginClick=page.locator("//button[text()='Log in']")
   } 
async goto(){
    await this.page.goto("https://www.demoblaze.com/")
    }
async loginbutton(){
    this.loginButton.click()
}
async login(username,password){
    await this.loginUsername.fill(username)
    await this.loginPassword.fill(password)
    }    
async clickLogin(){
    await this.loginClick.click()
}
}