import { test, expect } from '@playwright/test';
import loginData from '../testdata/loginData.js';


loginData.validUsers.forEach((user)=>{
    test('Login Test for ${user.username}', async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.fill('#username', user.username);
        await page.fill('#password', user.password);
        await page.click('#loginButton');
        await expect(page).toHaveURL('https://example.com/dashboard');
    }
}