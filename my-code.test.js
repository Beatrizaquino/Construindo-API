const { sum, inOneHour } = require('./index')

describe('time function', () => {
    beforeAll(() => {
        console.log('before all')
    })

    it('return the timestamp fot one hour ahead', () => {
        global.Date.now = () => 0
        expect(inOneHour()).toBe(1677269027189)
    })

})

