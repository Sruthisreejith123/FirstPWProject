# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signUpPage.spec.js >> SignUp
- Location: tests\signUpPage.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | export class SignUpPage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.signUp=page.locator('#signin2')
  5  |         this.username=page.locator('#sign-username')
  6  |         this.password=page.locator('#sign-password')
  7  |         this.signUpButton=page.locator("//button[text()='Sign up']")
  8  |         this.signUpClose=page.locator("//button[text()='Close']")
  9  |     }
  10 | async goto(){
> 11 |     await this.page.goto("https://www.demoblaze.com/")
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  12 |     }
  13 | async signUpFn(username,password){
  14 |     await this.signUp.click()
  15 |     await this.username.fill(username)
  16 |     await this.password.fill(password)
  17 |    
  18 |     }    
  19 | async clickSignUp(){
  20 |     await this.signUpButton.click()
  21 | } 
  22 | async signUpClose(){
  23 |     this.this.signUpClose.click()      
  24 | }
  25 | }
```