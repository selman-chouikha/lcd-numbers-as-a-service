require('chai').should()

const {numberToLcd} = require('../app/number-to-lcd')

describe('Number to LCD', () => {
    it('converts 1', () => {
        numberToLcd(1).should.equal(`
  #
  #
  #
  #
  #
`)
    })
    it('converts 2', () => {
        numberToLcd(2).should.equal(`
###
  #
###
#  
###
`)
    })
})
