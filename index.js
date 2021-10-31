module.exports = {
    print(text, name){
        if (text == (undefined||null)) throw Error("Please enter something!")
        if (text.length == 0) throw Error("Please put something in!")
    
        if (name) return console.log(`${name}: ${text}`)
        else return console.log(`${text}`)
    },
    alert(text){
        if (text == (undefined||null)) throw Error("Please enter something!")
        this.alert(text)
    },
    warnConsole(text){
        if (text == (undefined||null)) throw Error("Please enter something!")
        console.warn(text)
    },
    errorConsole(text){
        if (text == (undefined||null)) throw Error("Please enter something!")
        console.error(text)
    },
    startServer(port){
        throw Error("The command 'startServer' is currently not avaliable.")

        if (port == (undefined||null)) throw Error("Please enter something!")
        else if (!typeof(port) == "number") throw TypeError("This is the wrong type of variable!")
        else{
            const http = require('https')
            http.createServer().listen(port)
        }
    },
    POST(url){
        if (!url) throw Error("You need to enter a URL here!")

        fetch(url, {method:"POST"}).then(res => {console.log(res)})
    },
    GET(url){
        if (!url) throw Error("You need to enter a URL here!")

        fetch(url).then(res => {console.log(res)})
    }
}