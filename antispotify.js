const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ]
});

const nf = () => {};

client.on(Events.MessageCreate, message => {
  if (message.member && message.member.presence) {
    const activities = message.member.presence.activities;
    if (activities && activities.length > 0) {
      message.delete().catch(nf);
      message.member.timeout(60000).catch(nf);
    }
  }
});

client.login('bot token');