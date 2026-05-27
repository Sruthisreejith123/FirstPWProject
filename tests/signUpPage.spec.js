import {expect,test} from "@playwright/test"
import {SignUpPage} from "../Pages/signUpPage"
test('SignUp',async({page})=>{
    const signUpPage=new SignUpPage(page)
    await signUpPage.goto()
    await signUpPage.signUpFn()
    await signUpPage.clickSignUp()
    await signUpPage.signUpFn()
    await signUpPage.signUpClose()

})
