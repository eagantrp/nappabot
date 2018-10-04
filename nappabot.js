import Discord from 'discord.js'

const client = new Discord.Client();

client.on('ready', () => {
    console.log("Hey Vegeta, are we there yet?")
})

client.on('message', message => {
    if (message.content === '!hello') {
        message.channel.send("Look Vegeta... it's a pokemon! It's a " + message.author + "!")
    }

})
if (client.uptime % 1800000 === 0) {
    client.channels.every.map(channel => channel.send("Hey Vegeta! I'm Nappabot! To see my commands, type !help"))
}
client.login('NDk3NDM3NTI0NzM4OTY1NTE0.DpfrQg.l0B27coEfikdhYLlj0D0sAVuMS0')