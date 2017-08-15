const reg = require('../dist/block-regexp')

test('base regexp', () => {
  expect(reg`abc`).toEqual(/abc/)
  expect(reg`abc?`).toEqual(/abc?/)
})

test('regexp with any space', () => {
  expect(reg`ab   c`).toEqual(/abc/)
  expect(reg`
    abc?
    `).toEqual(/abc?/)
})

test('regexp auto escape', () => {
  expect(reg`abc//`).toEqual(/abc\/\//)
})

test('regexp signle line comment with magic comment', () => {
  expect(reg`
    abc # this is a comment
    `).toEqual(/abc/)
  expect(reg`
      ^ 0b[01]+    |              # binary
      ^ 0o[0-7]+   |              # octal
      ^ 0x[\da-f]+ |              # hex
      ^ \d*\.?\d+ (?:e[+-]?\d+)?  # decimal
    `).toEqual(/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/)
})

test('Interpolation', () => {
  expect(reg`abc`).toEqual(/abc/)
})

test('Substitution', () => {
  let substMap = {
    '\a': /abc/
  }
  expect(reg`abc`).toEqual(/abc/)
})

test('classic regular expression rewrite', () => {

})
