//cardlink: https://projects.startise.com/fbs-74402
//release date: March 25, 2025



import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL;

test.describe("Bug Fix | Custom Notification | Bulk Edit tab is not working", () => {
  let adminContext, page;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    page = await adminContext.newPage();
  });

  test("Bug Fix | Custom Notification | Bulk Edit tab is not working", async () => {
  await page.goto("/wp-admin/admin.php?page=nx-edit");
    // await page.waitForTimeout(5000);
  
  await page.getByPlaceholder('NotificationX Title').click();
  await page.getByPlaceholder('NotificationX Title').fill('Custom Notification Bulk Edit Automation');
  await page.getByText('Custom Notification').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div:nth-child(2) > .wprf-control-field > .wprf-control > .wprf-row > div > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('Alif');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('Lam');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Mim');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('a@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://e4u.com');
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.locator('div:nth-child(2) > .wprf-repeater-field-title').click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('2nd');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Muammar');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Shahrear');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('m');
  await page.getByPlaceholder('Email Address').press('CapsLock');
  await page.getByPlaceholder('Email Address').fill('m@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://b@gmail.com');
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('heading', { name: '3:' }).click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('Thank ');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('Thank You');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('3rd');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Name');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('t@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://hi.com');
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.locator('div:nth-child(4) > .wprf-repeater-field-title').click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('4th');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Thank');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('You');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('y@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://hi@hello.com');
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.locator('div:nth-child(5) > .wprf-repeater-field-title').click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('5th');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Heel');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('On');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('h@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://hi.hello.com');
  await page.getByLabel('Select All').check();
  await page.getByRole('button', { name: 'Change Time' }).click();
  await page.locator('div').filter({ hasText: /^FromMarch 25, 2025 12:00 am$/ }).getByRole('button').click();
  await page.getByLabel('March 18,').click();
  await page.getByRole('button', { name: 'March 25, 2025 12:00 am' }).click();
  await page.getByLabel('March 23,').click();
  await page.getByRole('button', { name: 'Apply Changes' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowDown');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.getByText('Edit1: AlifTitleFirst').press('ArrowUp');
  await page.locator('#field-0-0-0').dblclick();
  await page.locator('#field-0-0-0').fill('1st');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.locator('#content').getByText('2', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).click();
  await page.getByPlaceholder('Title', { exact: true }).fill('6th');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Sixth');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('One');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('s@gmail.com');
  await page.getByPlaceholder('URL').click();
  await page.getByPlaceholder('URL').fill('https://he.com');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#position div').nth(1).click();
  await page.getByText('Bottom Right', { exact: true }).click();
  await page.getByPlaceholder('Display From The Last').click();
  await page.getByPlaceholder('Display From The Last').fill('2999');
  await page.getByRole('button', { name: 'Publish' }).click();
  await page.getByText('Successfully Created.').click();

  await page.getByRole('link', { name: 'All NotificationX' }).click();
  await page.getByRole('row', { name: 'Custom Notification Bulk Edit' }).locator('a').nth(2).click();
  await page.getByTitle('Delete').click();
  await page.getByRole('button', { name: 'Yes, Delete It' }).click();
  await page.getByRole('alert').locator('div').nth(1).click();
  
  });

});