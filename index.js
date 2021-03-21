const Discord = require('discord.js')
const client = new Discord.Client()
const { token, prefix } = require('./config.json')

client.on('ready', () => {
    console.log('Botty is online')
    client.user.setActivity('Hello, use ' + prefix + 'help to see my commands')
})

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        message.channel.send(`My latency is: ${client.ws.ping}ms`)
    }
})

client.login(token)
