import {expect,test} from "@playwright/test"
import {SignUpPage} from "../Pages/signUpPage"
const data=require('../util/LogInCredentials.json')
test('SignUp',async({page})=>{
    const loginUsername=data[0].validUsername
    const loginPassword=data[0].validPassword
    const signUpPage=new SignUpPage(page)
    await signUpPage.goto()

    await signUpPage.signUpFn(loginUsername,loginPassword)
    await signUpPage.clickSignUp()
    page.on('dialog',async dialog=>{ 
    await expect(dialog.message()).toBe('This user already exist.')
    await dialog.accept()
    await signUpPage.signUpClose()
    })
})
