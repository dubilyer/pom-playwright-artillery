const { ResultPage } = require("./resultPage");

class SearchPage {
    constructor(page) {
        this.page = page;
        this.queryInput = page.locator('input[name="q"]');
    }

    async search({ text }) {
        await this.queryInput.fill(text);
        await this.page.keyboard.press('Enter');
        return new ResultPage(this.page);
    }
}

module.exports = { SearchPage }