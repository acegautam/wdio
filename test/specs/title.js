// const assert = require('assert');
// import assert from 'assert'
import { expect } from 'chai'
// import 'chai/register-should';

// Constants
const SITE_URL = 'https://www.google.com'

describe('GOOGLE HOME PAGE', () => {
    before(() => {
        browser.url(SITE_URL);
    })

    it('should have the right title', () => {
        const title = browser.getTitle();
        console.log('The title of the page is =====> ' + title)
        expect(title, 'ERROR: Title mismatched :').to.equal('Google')
        // assert.equal(title, 'Google');
    });

    it('should have a visible button', () => {
        const button = $('#gbqfbb');
        expect(button.isDisplayed(), 'ERROR: Button not displayed :').to.be.true;
    })

    it('should have a button with the correct text', () => {
        // get specific element in DOM
        const btnText = $('#gbqfbb').getValue();
        console.log(`Button text is ======> ${btnText}`);
        expect(btnText).to.equal(`I'm Feeling Lucky`)
        // assert.equal(btnText, `I'm Feeling Lucky`)
    })

    it('should have at least 4 links', () => {
        // find multiple elements in DOM (array)
        const links = $$('a')
        // links.forEach(link => console.log(link.getText()))
        expect(links, 'ERROR: Missing links :').to.have.lengthOf.at.least(4)
    })
});