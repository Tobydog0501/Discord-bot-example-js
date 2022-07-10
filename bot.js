const { Client, Intents } = require('discord.js');
const TOKEN = require("./env.json")
const a = "n"
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS
    ] 
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});



bot.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});



bot.login(TOKEN.TOKEN);