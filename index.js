// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require("dotenv").config();
import { getAffirmation } from './affirmations';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
console.log('hello')
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.on('message', msg => {
  if (msg.content === "affirmation") {
    getAffirmation
      .then(aff => { msg.reply(aff)});
  }
})
client.login(process.env.TOKEN)