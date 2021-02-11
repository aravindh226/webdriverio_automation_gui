let transferred, details

describe('Resource Test:', () => {
    before(() => {
        browser.enablePerformanceAudits({
            networkThrottling: 'online',
            cpuThrottling: 0,
            cacheEnabled: false
        })
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        const pageWeight = browser.getPageWeight()
        transferred = pageWeight.transferred
        details = pageWeight.details
    })

    it('should load not more than 2000kb', () => {
        assert.isBelow(transferred, 2000 * 1000, 'Less than 2000kb');
    })

    it('images should be compressed', () => {
        assert.isBelow(details.Image.encoded, 400 * 1000, 'Compressed');
    })

    it('scripts should be minified', () => {
        assert.isBelow(details.Script.encoded, 1000 * 1000, 'Minified');
    })
})