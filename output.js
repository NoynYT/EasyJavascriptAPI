module.exports = (text, name) => {
    if (text == (undefined||null)) throw Error("Don't randomly call this API!")
    if (text.length == 0) throw Error("Please put something in!")
    
    if (name) return console.log(`${name}: ${text}`)
    else return console.log(`${text}`)
}