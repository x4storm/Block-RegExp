function reg(literals) {
    // console.log(literals)
    // console.log(literals.raw[0])
    let trimStr = literals.raw.join('<DeaTh-ToKEn>').replace(/,/g, '<DeaTh-ToKEn>').split('<DeaTh-ToKEn>').join('') // flat TODO
    let removeComment = trimStr.replace(/([^\\])#.+/g, '$1')
    let removeSpace = removeComment.replace(/\s/g, '')
    // console.log(new RegExp(removeSpace))
    return new RegExp(removeSpace)
}

export default reg;