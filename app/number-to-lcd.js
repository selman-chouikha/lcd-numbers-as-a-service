const singleNumbers = [
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
`
]

function numberToLcd(number) {
    return singleNumbers[number]
}

module.exports = {
    numberToLcd
}
