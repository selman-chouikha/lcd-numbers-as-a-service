function numberToLcd(number) {
    const digits = (number < 10) ? [number] : [1, 0]
    const resultLines = [1, 2, 3, 4, 5].map(lineNumber => _currentLine(digits, lineNumber))
    return '\n' + resultLines.join('\n') + '\n'
}

function digitLine(digit, line) {
    return DIGIT_LINES[digit][line - 1]
}

function _currentLine(digits, lineNumber) {
    const currentLineParts = digits.map(digit => digitLine(digit, lineNumber))
    return currentLineParts.join(' ')
}

module.exports = {
    numberToLcd,
    digitLine
}

const XXX = '###'
const X_X = '# #'
const X__ = '#  '
const _X_ = ' # '
const __X = '  #'

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
        __X
    ],
    [
        XXX,
        __X,
        XXX,
        X__,
        XXX
    ],
    [
        XXX,
        __X,
        XXX,
        __X,
        XXX
    ],
    [
        X_X,
        X_X,
        XXX,
        __X,
        __X
    ],
    [
        XXX,
        X__,
        XXX,
        __X,
        XXX
    ],
    [
        XXX,
        X__,
        XXX,
        X_X,
        XXX
    ],
    [
        XXX,
        __X,
        _X_,
        _X_,
        _X_
    ],
    [
        XXX,
        X_X,
        XXX,
        X_X,
        XXX
    ],
    [
        XXX,
        X_X,
        XXX,
        __X,
        XXX
    ]
]
