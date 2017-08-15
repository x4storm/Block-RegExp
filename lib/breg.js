let log = console.log

function reg(literals, ...values) {
  let liters = literals.raw
  let regLiter = concatLiterals(liters, values).trim()

  let flagsComment = regLiter.match(/# *flags *=.*$/m)
  let flags = flagsComment ? flagsComment[0].replace(/^#/, '').split('=')[1] : ''
  flags = flags.trim()
  flags = filterSubstr('img', flags)

  let removeComment = regLiter.replace(/([^\\])?#.+/g, '$1')
  let removeSpace = removeComment.replace(/\s/g, '')
  return new RegExp(removeSpace, flags)
}

function concatLiterals(literals, values) {
  let result = ''
  for (let i = 0; i < literals.length; i++) {
    result += literals[i]
    if (i < values.length) {
      result += values[i]
    }
  }
  return result
}

function filterSubstr(pattern, str){
  str = [...new Set(Array.from(str))]
  return str.filter(s => pattern.indexOf(s) >= 0).join('')
}

export default reg
