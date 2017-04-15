require('chai').should()

const {numberToLcd, digitLine, splitNumber} = require('../app/number-to-lcd')

describe('Number to LCD', () => {
    context('Single digits', function() {
        it('converts 0', () => {
            numberToLcd(0).should.equal(`
###
# #
# #
# #
###
`)
        })

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

        it('converts 3', () => {
            numberToLcd(3).should.equal(`
###
  #
###
  #
###
`)
        })

        it('converts 4', () => {
            numberToLcd(4).should.equal(`
# #
# #
###
  #
  #
`)
        })

        it('converts 5', () => {
            numberToLcd(5).should.equal(`
###
#  
###
  #
###
`)
        })

        it('converts 6', () => {
            numberToLcd(6).should.equal(`
###
#  
###
# #
###
`)
        })

        it('converts 7', () => {
            numberToLcd(7).should.equal(`
###
  #
 # 
 # 
 # 
`)
        })

        it('converts 8', () => {
            numberToLcd(8).should.equal(`
###
# #
###
# #
###
`)
        })

        it('converts 9', () => {
            numberToLcd(9).should.equal(`
###
# #
###
  #
###
`)
        })
    })

    context('Larger numbers', () => {
        it('converts 10', () => {
            numberToLcd(10).should.equal(`
  # ###
  # # #
  # # #
  # # #
  # ###
`)
        })

        it('converts 11', () => {
            numberToLcd(11).should.equal(`
  #   #
  #   #
  #   #
  #   #
  #   #
`)
        })

        it('converts 1789', () => {
            numberToLcd(1789).should.equal(
                `
  # ### ### ###
  #   # # # # #
  #  #  ### ###
  #  #  # #   #
  #  #  ### ###
`)
        })
    })

    describe('Digit division in lines', () => {
        context('For the digit "0"', () => {
            it('returns "###" as the first line', () => {
                digitLine(0, 1).should.equal('###')
            })

            it('returns "# #" as the second line', () => {
                digitLine(0, 2).should.equal('# #')
            })

            it('returns "# #" as the third line', () => {
                digitLine(0, 3).should.equal('# #')
            })

            it('returns "###" as the last line', () => {
                digitLine(0, 5).should.equal('###')
            })
        })

        context('For the digit "1"', () => {
            it('returns " #" as the first line', () => {
                digitLine(1, 1).should.equal('  #')
            })
        })

        context('For the other digits', () => {
            it('returns "###" as the first line for 2', () => {
                digitLine(2, 1).should.equal('###')
            })

            it('returns "#  " as the second line for 2', () => {
                digitLine(2, 2).should.equal('  #')
            })

            it('returns "#  " as the fourth line for 2', () => {
                digitLine(2, 4).should.equal('#  ')
            })

            it('returns "###" as the first line for 3', () => {
                digitLine(3, 1).should.equal('###')
            })

            it('returns "# #" as the first line for 4', () => {
                digitLine(4, 1).should.equal('# #')
            })

            it('returns "###" as the first line for 5', () => {
                digitLine(5, 1).should.equal('###')
            })
        })
    })

    describe('Splitting a number into digits', () => {
        context('Single digit numbers', () => {
            it('returns [0] for 0', () => {
                splitNumber(0).should.deep.equal([0])
            })
            it('returns [9] for 9', () => {
                splitNumber(9).should.deep.equal([9])
            })
        })

        context('Larger numbers', () => {
            it('returns [1, 0] for 10', () => {
                splitNumber(10).should.deep.equal([1, 0])
            })

            it('returns [1, 7, 8, 9] for 1789', () => {
                splitNumber(1789).should.deep.equal([1, 7, 8, 9])
            })
        })
    })
})
