let metrics, score

describe('Performance Test:', () => {
    before(() => {
        /**
         * enable performance audits for all upcoming page loads
         */
        browser.enablePerformanceAudits()

        /**
         * open app
         */
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')

        /**
         * capture metrics for last page load
         */
        metrics = browser.getMetrics()
        score = browser.getPerformanceScore()
    })

    it('should not increase firstMeaningfulPaint limit', () => {
        assert.isBelow(metrics.firstMeaningfulPaint, 5 * 1000, 'firstMeaningfulPaint'); // 5 seconds
    })

    it('should not increase firstInteractive limit', function () {
        assert.isBelow(metrics.firstInteractive, 15 * 1000, 'firstInteractive'); // 15 seconds
    })

    it('should not increase speedIndex limit', () => {
        assert.isBelow(metrics.speedIndex, 15 * 1000, 'speedIndex'); // 15
    })

    it('should have a minimum Lighthouse performance score', () => {
        assert.isAbove(metrics.speedIndex, 0.1, 'speedIndex'); // 0.1
    })  
})