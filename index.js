const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const transcriptsystem = require('discord-html-transcripts');
const c = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Load the config
const config = require("./config.json")
const token = config.token

// Events
c.once("ready", async () => {
    console.log(`Logged in as ${c.user.username}`)
})

c.on("messageCreate", async (msg) => {
    if (msg.content !== "!save") return

    // Make a simple embed
    const siteembed = new EmbedBuilder()
        .setTitle("Transcript made")
        .setDescription("Above is your transcript, this includes every message of the channel, along with actions like pins.")
        .setTimestamp()
        .setColor("#29a317")

    // Get the channel
    const channel = msg.channel

    // Make the HTML file
    const site = await transcriptsystem.createTranscript(channel)

    // Reply to the message
    await msg.reply({content: "", files: [site], embeds: [siteembed]})
})



c.login(token)