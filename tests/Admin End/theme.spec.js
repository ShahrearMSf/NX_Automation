import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL;

test.describe("Theme Specifically Mobile Based", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });


test('theme based tests 1', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();
  await adminPage.locator('#type_section').getByText('WooCommerce').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('.wprf-input-image').first().click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByText('Reviews').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('.wprf-input-image').first().click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Growth Alert', { exact: true }).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(1).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#type_section').getByText('Sales Notification').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
});
  
  test('theme based tests 2', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();
  
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(3) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes > .wprf-section-fields > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(4) > .wprf-input-radio-option > .wprf-input-label').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).getByRole('img').click();
  await adminPage.locator('div:nth-child(5) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section > .wprf-section-fields > .wprf-control-wrapper > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(6) > .wprf-input-radio-option > .wprf-input-label').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(7) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();


});

test('theme based tests 3', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();

  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Cookie Notice').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('div').filter({ hasText: /^Select ThemeLightDark$/ }).locator('label').nth(1).click();
  await adminPage.locator('div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('eLearning', { exact: true }).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').nth(1).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).getByRole('img').click();
  await adminPage.locator('#source_section').getByRole('img').nth(1).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByRole('img').nth(2).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').first().click();
});

test('theme based tests 4', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();


  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Notification Bar').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(1).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#type_section').getByText('Reviews').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(4) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(3) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(4) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('div:nth-child(5) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  
});

test('theme based tests 5', async ({ page }) => {
  
  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();


  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
//   await adminPage.locator('div:nth-child(6) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Contact Form').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').nth(1).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('WPForms', { exact: true }).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(3).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Ninja Forms').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').first().click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).getByRole('img').click();
  await adminPage.getByText('Fluent Forms').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(3).click();
});
 
 test('theme based tests 6', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();
 
 
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Gravity Forms').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').nth(1).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Elementor Form').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(3).click();
  await adminPage.locator('#themes').getByRole('img').nth(4).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Download Stats').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes label').nth(1).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByRole('img').nth(1).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Comments', { exact: true }).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').nth(4).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Discount Alert').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  // await adminPage.locator('li').filter({ hasText: /^Source$/ }).locator('path').click();
 
});


//following test creating time out issue
test('theme based tests 7', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();


  await adminPage.locator('li').filter({ hasText: /^Source$/ }).getByRole('img').click();
  await adminPage.getByText('Donations', { exact: true }).click();
  await adminPage.locator('#source_section').getByRole('img').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Flashing Tab').click();
  await adminPage.locator('#source_section').getByText('Flashing Tab').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('#themes').getByRole('img').nth(2).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Growth Alert 🚀').click();
  await adminPage.locator('#source_section').getByRole('img').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByRole('img').nth(1).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section label').nth(2).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByRole('img').nth(3).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
});

test('theme based tests 8', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();



  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.locator('#source_section').getByRole('img').nth(4).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('li').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Custom Notification').click();
  await adminPage.locator('#source_section label').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('ul').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Video', { exact: true }).click();
  await adminPage.locator('#source_section label').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  await adminPage.getByText('Email Subscription').click();
  await adminPage.locator('#source_section').getByRole('img').first().click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').nth(1).click();
  // await adminPage.locator('li').filter({ hasText: /^Source$/ }).locator('path').click();
  
});

test('theme based tests 9', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();

  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
//   await adminPage.locator('#source_section').getByRole('img').nth(1).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  // await adminPage.locator('#source_section label').nth(2).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('li').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('#responsive_themes').getByRole('img').first().click();
});

test('theme based tests 10', async ({ page }) => {

  await adminPage.goto("/wp-admin/admin.php?page=nx-dashboard");
  await adminPage.locator('div').filter({ hasText: /^Add New$/ }).locator('a').click();


  await adminPage.locator('li').filter({ hasText: /^Source$/ }).getByRole('img').click();
  // await adminPage.locator('#source_section').getByRole('img').nth(3).click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('span').filter({ hasText: 'For Desktop' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
  await adminPage.locator('span').filter({ hasText: /^Source$/ }).click();
  // await adminPage.getByText('adminPage Analytics').click();
  await adminPage.locator('#source_section').getByRole('img').click();
  await adminPage.getByRole('button', { name: 'Next' }).click();
  await adminPage.locator('#themes > div:nth-child(2) > div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await adminPage.locator('span').filter({ hasText: 'For Mobile' }).click();
  await adminPage.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div:nth-child(2) > .wprf-input-radio-option > .wprf-input-label').first().click();
});

});