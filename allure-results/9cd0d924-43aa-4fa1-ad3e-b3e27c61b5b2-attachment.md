# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signUpPage.spec.js >> SignUp
- Location: tests\signUpPage.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#signin2')
    - locator resolved to <a href="#" id="signin2" class="nav-link" data-toggle="modal" data-target="#signInModal">Sign up</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="dialog" id="signInModal" class="modal fade show" aria-labelledby="signInModalLabel">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="dialog" id="signInModal" class="modal fade show" aria-labelledby="signInModalLabel">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    17 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div tabindex="-1" role="dialog" id="signInModal" class="modal fade show" aria-labelledby="signInModalLabel">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
  11 |     await this.page.goto("https://www.demoblaze.com/")
  12 |     }
  13 | async signUpFn(username,password){
> 14 |     await this.signUp.click()
     |                       ^ Error: locator.click: Target page, context or browser has been closed
  15 |     await this.username.fill(username)
  16 |     await this.password.fill(password)
  17 |     }    
  18 | async clickSignUp(){
  19 |     await this.signUpButton.click()
  20 | } 
  21 | async signUpClose(){
  22 |     this.this.signUpClose.click()      
  23 | }
  24 | }
```