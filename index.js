// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import 'dotenv/config';
import getAffirmation from './affirmations.js'
import mongoose from "mongoose";

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});
console.log('hello');
client.on("ready", async () => {
  await mongoose.connect(process.env.MONGO_URI || "", 
    {
      keepAlive: true
    })
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.on('message', msg => {
  if (msg.content === "affirmation") {
    getAffirmation()
      .then(aff => { msg.reply(aff) });
  }
})
client.login(process.env.TOKEN)