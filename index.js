const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "-";

client.once("ready", () => {
  console.log("Bot connected successfully!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  message.channel.send("hello!");
});

client.login("   ");
