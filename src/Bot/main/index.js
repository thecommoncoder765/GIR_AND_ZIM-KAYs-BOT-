require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log("ZIM AND GIR ONLINE!!!!!!!!!");
})


bot.on('message', msg => {
    let args = msg.content.substring(process.env.PREFIX.length).split(" ");

    switch (args[0]) {
        case 'hey-gir':
            if (!args[1]) {
                msg.reply("what, you rat?");
            }

            if (args[1] === 'am-i-stupid?') {
                msg.reply('yes in fact, you are.');
            }
    }
})


bot.login(process.env.TOKEN);