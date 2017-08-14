'use strict';

function reg(literals) {
    // console.log(literals)
    // console.log(literals.raw[0])
    let trimStr = literals.raw.join('<DeaTh-ToKEn>').replace(/,/g, '<DeaTh-ToKEn>').split('<DeaTh-ToKEn>').join(''); // flat TODO
    let removeComment = trimStr.replace(/([^\\])#.+/g, '$1');
    let removeSpace = removeComment.replace(/\s/g, '');
    // console.log(new RegExp(removeSpace))
    return new RegExp(removeSpace)
}
var testReg = reg `
  ^ https? |  # begin with http or https
  ^ ://       # begin with relative protocol
  `;

console.log(testReg.test('https://www.baidu.com'));
console.log(testReg.test('http://www.baidu.com'));
console.log(testReg.test('://www.baidu.com'));

module.exports = reg;
