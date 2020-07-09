require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log("ZIM AND GIR ONLINE!!!!!!!!!");
})


bot.on('message', msg => {
    let args = msg.content.substring(process.env.PREFIX.length).split(" ");
})


bot.login(process.env.TOKEN);