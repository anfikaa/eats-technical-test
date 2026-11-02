import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.klikindomaret.com/');
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.locator('#kategori svg').click();
  await page.getByRole('button', { name: 'Makanan Makanan' }).click();
  await page.getByRole('link', { name: 'Madu', exact: true }).click();

  await page.locator("//div//div//div//div//div//div//div[2]//div[1]//div[1]//div[1]//div[1]//div[1]//button[2]//*[name()='svg']").click(); 
  
});