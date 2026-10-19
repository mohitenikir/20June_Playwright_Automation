

import{test, expect} from "@playwright/test";

test("Xpath using attribute", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    console.log("Navigate to OrangeHRM")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.waitForTimeout(3000)
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    const name = await page.locator("//span[@class='oxd_userdropdown']").isVisible()
    await expect(page.locator("//span[@class='oxd_userdropdown']")).toBeVisible();


})

test("Xpath using attribute", async({page})=>{
    await page.goto("https://demo.automationtesting.in/")
    
    await page.waitForTimeout(3000)
    await page.locator("//input[@placeholder='First Name']").fill("Admin")
    await page.locator("//input[@placeholder='Last Name']").fill("admin123")
    await page.waitForTimeout(3000)
    await page.locator("//div[@class='col-md-8 col-xs-8 col-sm-8']").fill("Pune")
})

test("Xpath using Text function", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.waitForTimeout(3000)
    await page.locator("//label[@text='Name']").fill("Admin")
    await page.locator("//label[@text='Email']").fill("admin123")
    await page.waitForTimeout(3000)
    await page.locator("//div[@class='col-md-8 col-xs-8 col-sm-8']").fill("Pune")
})
test("Xpath using Contains", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    
    await page.waitForTimeout(3000)
    await page.locator("//p[contains(text(),'Forgot your password? ')]").click()
    await page.waitForTimeout(3000)

    let text = await page.locator("//p[contains(text(),'Forgot your password? ')]").textContent()
    console.log(text)
    await expect(text).toContain("")
})


