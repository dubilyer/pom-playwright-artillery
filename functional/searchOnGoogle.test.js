const { SearchPage } = require("../pom/searchPage");
const { test, expect } = require('@playwright/test');

test('Search on google', async ({ page }) => {
    await page.goto('https://www.google.com', { waitUntil: 'networkidle' });
    const searchPage = new SearchPage(page);
    const resultPage = await searchPage.search({ text: 'skipper-soft'});
    const results = await resultPage.getResults();
    const text = await results[0].innerText();
    await expect(text).toContain('Skipper Soft');
});