//cardlink: https://projects.startise.com/fbs-74401
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

  test("Bug Fix | Cookie Notice | Custom Cookie addition is not working | Manger Section", async () => {
    await page.goto("/wp-admin/admin.php?page=nx-edit");
    await page.getByText('Cookie Notice').click();
    await page.getByText('GDPR', { exact: true }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('div').filter({ hasText: /^Select ThemeLightDark$/ }).locator('label').nth(1).click();
    await page.locator('div:nth-child(4) > .wprf-input-radio-option > .wprf-input-label > .wprf-input-image').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByPlaceholder('Cookie ID').click();
    await page.getByPlaceholder('Cookie ID').fill('26');
    await page.getByPlaceholder('Script', { exact: true }).click();
    await page.getByPlaceholder('Script', { exact: true }).fill('alert(\'Hello March 26!!\');');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('March 1');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Cookie ID26Scriptalert(\'Hello').click();
    await page.locator('span').filter({ hasText: 'Functional' }).click();
    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByPlaceholder('Cookie ID').click();
    await page.getByPlaceholder('Cookie ID').fill('27');
    await page.getByPlaceholder('Script', { exact: true }).click();
    await page.getByPlaceholder('Script', { exact: true }).fill('alert(\'Shakib Bhai\');');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('April');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Cookie ID27Scriptalert(\'').click();
    await page.getByText('Analytics00').click();
    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByPlaceholder('Cookie ID').click();
    await page.getByPlaceholder('Cookie ID').fill('28');
    await page.getByPlaceholder('Script', { exact: true }).click();
    await page.getByPlaceholder('Script', { exact: true }).fill('alert(\'Fuad bhai\');');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('May');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Cookie ID28Scriptalert(\'Fuad').click();
    await page.locator('span').filter({ hasText: 'Performance' }).click();
    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByPlaceholder('Cookie ID').click();
    await page.getByPlaceholder('Cookie ID').fill('29');
    await page.getByPlaceholder('Script', { exact: true }).click();
    await page.getByPlaceholder('Script', { exact: true }).fill('alert(\'Rasel bhai\');');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('June');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Cookie ID29Scriptalert(\'Rasel').click();
    await page.locator('span').filter({ hasText: 'Uncategorized' }).click();
    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByPlaceholder('Cookie ID').click();
    await page.getByPlaceholder('Cookie ID').fill('30');
    await page.getByPlaceholder('Script', { exact: true }).click();
    await page.getByPlaceholder('Script', { exact: true }).fill('alert(\'Nahid bhai\');');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('Do not schedule release on Thursday please');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Cookie ID30Scriptalert(\'Nahid').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('Delay Before Appearance').click();
    await page.getByPlaceholder('Delay Before Appearance').fill('2');
    await page.getByRole('button', { name: 'Publish' }).click();
    await page.getByText('Successfully Created.').click();
    await page.getByPlaceholder('NotificationX Title').click();
    await page.getByPlaceholder('NotificationX Title').fill('Automation Cookie Test');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('link', { name: 'All NotificationX' }).click();
    await page.getByRole('row', { name: 'Automation Cookie Test' }).locator('a').nth(2).click();
    await page.getByTitle('Delete').click();
    await page.getByRole('button', { name: 'Yes, Delete It' }).click();
    await page.getByRole('alert').locator('div').nth(1).click();
    });

});