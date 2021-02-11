const constants = require('../constants')
const elementUtil = require('../util/elementUtil')

class homePage {
    //Page Locators
    get videoButton() {return $('#Video-1')} //"Watch the Story video button"
    get acceptButton() {return $('=Accept')} //"Accept button"
    get disclaimerExists() {return $('#Disclaimer-1')} //"Disclaimer"
    get copyrightExists() {return $('#Copyright')} //"Disclaimer
    //Page actions
    getPageURLAndTitle() {
        return {
            title: browser.getTitle(),
            url: browser.getUrl()
        }
    }
    isVideoButtonExists() {
        return elementUtil.doIsDisplayed(this.videoButton)
    }
    isDisclaimerExists() {
        return elementUtil.doIsDisplayed(this.disclaimerExists)
    }
    isCopyrightExists() {
        return elementUtil.doIsDisplayed(this.copyrightExists)
    }
}


module.exports = new homePage()