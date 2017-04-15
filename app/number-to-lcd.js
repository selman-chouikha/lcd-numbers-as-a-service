const SINGLE_NUMBERS = [
    `
###
# #
# #
# #
###
`,
    `
  #
  #
  #
  #
  #
`,
    `
###
  #
###
#  
###
`,
    `
###
  #
###
  #
###
`, `
# #
# #
###
  #
  #
`,
    `
###
#  
###
  #
###
`,
    `
###
#  
###
# #
###
`,
    `
###
  #
 # 
 # 
 # 
`,
    `
###
# #
###
# #
###
`,
    `
###
# #
###
  #
###
`]

function numberToLcd(number) {
    return SINGLE_NUMBERS[number] || SINGLE_NUMBERS[1]
}

const XXX = '###'
const X_X = '# #'
const __X = '  #'
const X__ = '#  '
const _X_ = ' # '

const DIGIT_LINES = [
    [
        XXX,
        X_X,
        X_X,
        X_X,
        XXX
    ],
    [
        __X,
        __X,
        __X,
        __X,
        __X,
    ],
    [
        XXX,
        __X,
        XXX,
        X__,
        XXX,
    ],
    [
        XXX,
        __X,
        XXX,
        __X,
        XXX,
    ],
    [
        X_X,
        X_X,
        XXX,
        __X,
        __X,
    ],
    [
        XXX,
        X__,
        XXX,
        __X,
        XXX,
    ],
    [
        XXX,
        X__,
        XXX,
        X_X,
        XXX,
    ],
    [
        XXX,
        __X,
        _X_,
        _X_,
        _X_,
    ],
    [
        XXX,
        X_X,
        XXX,
        X_X,
        XXX,
    ],
    [
        XXX,
        X_X,
        XXX,
        __X,
        XXX,
    ]
]

function digitLine(digit, line) {
    return DIGIT_LINES[digit][line - 1]
}

module.exports = {
    numberToLcd,
    digitLine
}
