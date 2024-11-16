# Discord Transcript Bot

This is a simple Discord bot that allows users to create transcripts of a channel's chat. When a user types `!save` in the chat, the bot generates a transcript of all the messages in the channel, including pins and other actions, and sends the transcript as an HTML file along with a confirmation embed.

## Features

- Listens for the `!save` command in any channel.
- Generates an HTML transcript of the current channel's messages.
- Includes pinned messages and other actions in the transcript.
- Sends the generated transcript file and a confirmation embed back to the user.

## Requirements

- Node.js v16.9.0 or higher
- A Discord bot token
- The following npm packages:
  - `discord.js`
  - `discord-html-transcripts`

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/discord-transcript-bot.git
2. Install the required dependencies:

   ```bash
   npm install discord.js
   npm install discord-html-transcripts
3. Create a config.json file in the root directory of the project with your bot token:
   ```json
   {"token": "YOUR_DISCORD_BOT_TOKEN"}  
4. Run the bot:

   ```bash
   node index.js

Enjoy!
