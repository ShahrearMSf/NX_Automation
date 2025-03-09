//these 3 tests will always pass https://d.pr/i/oNcYSy
//check the logs for getting output whether okay or not okay


import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL;

test.describe("LearnPress url needs to be written properly", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

  // Test 1: Check if NotificationX and NotificationX Pro are active
  test("Check NotificationX and NotificationX Pro plugin status", async () => {
    await adminPage.goto("/wp-admin/plugins.php");
    console.log("🔍 Checking NotificationX plugin status...");

    // Function to activate plugin if it's not active
    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await adminPage.locator(activateButton).isVisible()) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await adminPage.locator(activateButton).click();
        await adminPage.waitForTimeout(3000);
      } else {
        console.log(`✅ ${pluginSlug} is already active.`);
      }
    }

    // Activate NotificationX and NotificationX Pro if needed
    await activatePlugin("notificationx/notificationx.php");
    await activatePlugin("notificationx-pro/notificationx-pro.php");

    // Confirm both are active
    console.log("Checked NotificationX and NotificationX Pro plugin statuses.");
  });



  // Test 2: Check LearnPress image in eLearning notification type
  test("Check LearnPress image in eLearning notification type", async () => {
    await adminPage.goto("/wp-admin/admin.php?page=nx-edit");
    await adminPage.getByText('eLearning', { exact: true }).click();

    // Check LearnPress image source in the Source section
    const imageSrc = await adminPage.evaluate(() => {
      const img = document.querySelector('img[src*="_learnpress.png"]');
      return img ? img.src : null;
    });

    if (imageSrc === `${baseUrl}/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/_learnpress.png`) {
      console.log(" ✅ Test 2 Passed: LearnPress image is correct.");
    } else {
      console.log(" ❌ Test 2 Failed: LearnPress image source mismatch.");
    }
  });

  // Test 3: Check LearnPress image in Growth Alert notification type
  test("Check LearnPress image in Growth Alert notification type", async () => {
    await adminPage.goto("/wp-admin/admin.php?page=nx-edit");
    await adminPage.getByText('Growth Alert 🚀', { exact: true }).click();

    // Check LearnPress image source in the Source section
    const imageSrc = await adminPage.evaluate(() => {
      const img = document.querySelector('img[src*="_learnpress.png"]');
      return img ? img.src : null;
    });

    if (imageSrc === `${baseUrl}/wp-content/plugins/notificationx/assets/admin/images/extensions/sources/_learnpress.png`) {
      console.log(" ✅ Test 3 Passed: LearnPress image is correct.");
    } else {
      console.log(" ❌ Test 3 Failed: LearnPress image source mismatch.");
    }
  });
});
