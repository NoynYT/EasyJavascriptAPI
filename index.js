const src=require("./src")
const commands = {}

for (const command of src){
    commands[command] = require(`./src/${command}.js`)
}

module.exports=commands