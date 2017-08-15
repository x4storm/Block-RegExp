const reg = require('../dist/block-regexp')
const log = console.log

let i18n = 'en'

let pReg = reg`# flags =imgimg
  ^ https?://${i18n}.test.com  |   # begin with http or https
  ^ ://         # or begin with relative protocal
`

log(pReg)
log(pReg.test('http://en.test.com'))
