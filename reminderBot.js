require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client()
let request = require('request');

client.on('ready', () => {
    console.log("connected as " + client.user.tag);
})
if (process.env.bot_secrect_token) {
    client.login(process.env.bot_secrect_token)
}

client.on('message', (message) => {
    if (message.author == client.user) {
        return
    }

    if (message.content.startsWith("!")) {
        processCommand(message)
    }
});

function processCommand(msg) {
    var reminderChannel = client.channels.get(process.env.reminder_channel_id);
    let fullCommand = msg.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];

    if (primaryCommand == "remindme") {

    } else if (primaryCommand == "reminduser") {
      
    } else if (primaryCommand == "help") {
        
    } else {
        reminderChannel.send("I don't understand the command. Try `!help` or `!weather`")
    }
}


function remindMe(args, msg) {
    var reminderChannel = client.channels.get(process.env.reminder_channel_id);
    if (args.length < 3) {
        reminderChannel.send("Not enough arguments. Please make sure to space arguments.")
    } else {
        let user = args[0];
        let dateTime = args[1];
        let reminderMsg = args[2];

    }
}

function remindUser(args, msg) {

}


function parseDatTimeReminder(dt) {
    let nums = dt.split(".");
    let min = nums[0];
    let hour = nums[1];
    let day = nums[2];
    let month = nums[3];
    let year = nums[4];
}