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
`,`
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
    return singleNumbers[number] || singleNumbers[1]
}

module.exports = {
    numberToLcd
}
