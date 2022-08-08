const {SearchPage} = require("../../pom/searchPage");

async function hf(page){
    await page.goto('https://www.google.com', { waitUntil: 'networkidle' });
    const searchPage = new SearchPage(page);
    const resultPage = await searchPage.search({ text: 'skipper-soft'});
    await resultPage.getResults();
    await page.close();
}

module.exports = { hf };