import Discord from 'discord.js'

const client = new Discord.Client();

client.on('ready', () => {
    console.log("I am ready!")
})

client.on('message', message => {
    if (message.content === '!Hello') {
        message.channel.send('Hello, ' + message.author)
    }

})
dfgdfg
client.login('497437524738965514')