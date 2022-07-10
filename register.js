const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const TOKEN = require("./env.json")

CLIENT_ID = "";     //Discord developers portal(Application ID)
GUILD_ID = "";      //Guild ID

const commands = [{
  name: 'ping', //command name
  description: 'Replies with Pong!' //command's description
}]; 

const rest = new REST({ version: '9' }).setToken(TOKEN.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();