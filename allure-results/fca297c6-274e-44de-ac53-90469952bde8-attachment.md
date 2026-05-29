# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logoutPage.spec.js >> Login with Valid Credentials
- Location: tests\logoutPage.spec.js:4:5

# Error details

```
ReferenceError: data is not defined
```

# Test source

```ts
  1  | import {expect,test} from "@playwright/test"
  2  | import {LoginPage} from "../Pages/loginPage"
  3  | import {LogoutPage} from '../Pages/logoutPage'
  4  | test('Login with Valid Credentials',async({page})=>{
> 5  |     const loginUsername=data[0].validUsername
     |                         ^ ReferenceError: data is not defined
  6  |     const loginPassword=data[0].validPassword
  7  |     test.setTimeout(60000)
  8  |     const loginPage=new LoginPage(page)
  9  |     await loginPage.goto()
  10 |     await loginPage.loginbutton()
  11 |     await loginPage.login(loginUsername,loginPassword)
  12 |     await loginPage.clickLogin()
  13 |     await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm')
  14 |     //await expect(page.locator('#nameofuser')).toHaveText('Welcome Abhirammmm', { timeout: 10000 });
  15 |     //await expect(page).toHaveURL("https://www.demoblaze.com/")
  16 |     await logoutPage.logoutFn()
  17 |     await expect(page.locator('#signin2')).toHaveText('Sign up')
  18 | })
```