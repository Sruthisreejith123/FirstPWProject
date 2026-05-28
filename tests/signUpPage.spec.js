import {expect,test} from "@playwright/test"
import {SignUpPage} from "../Pages/signUpPage"
test('SignUp',async({page})=>{
    const signUpPage=new SignUpPage(page)
    await signUpPage.goto()

    await signUpPage.signUpFn("Abhirammmm","mm@2014")
    await signUpPage.clickSignUp()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('This user already exist.')
    await dialog.accept()
    await signUpPage.signUpClose()
    })
})
