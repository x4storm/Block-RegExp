const reg = require('../dist/block-regexp')

test('base regexp', () => {
  expect(reg`abc`).toEqual(/abc/)
  expect(reg`abc?`).toEqual(/abc?/)
})

// test('', () => {
//   var testReg = reg `
//   ^ https? |  # begin with http or https
//   ^ ://       # begin with relative protocol
//   `

// console.log(testReg.test('https://www.baidu.com'))
// console.log(testReg.test('http://www.baidu.com'))
// console.log(testReg.test('://www.baidu.com'))

// // reg`First line\nSecond line`
// })