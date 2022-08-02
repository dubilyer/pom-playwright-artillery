class ResultPage {

    constructor(page) {
        this.page = page;
    }

    async getResults() {
        await this.page.waitForSelector('#rso');
        return this.page.$$('h3');
    }
}

module.exports = { ResultPage };