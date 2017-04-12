function numberToLcd(number) {
    if (number === 2) {
        return `
###
  #
###
#  
###
`
    }
    return `
  #
  #
  #
  #
  #
`
}

module.exports = {
    numberToLcd
}
