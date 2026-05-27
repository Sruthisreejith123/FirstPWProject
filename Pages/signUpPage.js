export class SignUpPage{
    constructor(page){
        this.page=page
        this.signUp=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signUpButton=page.locator("//button[text()='Sign up']")
        this.signUpClose=page.locator("//button[text()='Close']")
    }
async goto(){
    await this.page.goto("https://www.demoblaze.com/")
    }
async signUpFn(){
    await this.signUp.click()
    await this.username.fill("SruthiSreejith")
    await this.password.fill("123")
    }    
async clickSignUp(){
    await this.signUpButton.click()
}
async signUpFn(){
    await this.signUp.click()
    await this.username.fill("SruthiSreejith")
    await this.password.fill("123")
    }  
async signUpClose(){
    this.this.signUpClose.click()      
}
}