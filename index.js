index.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'mc.server-ip.com', // ZAMENI sa IP adresom tvog servera
  port: 25565,              // standardni Minecraft port
  username: 'BotIme',       // može i email ako je premium nalog
  version: '1.20.1'         // verzija koju bot koristi (1.21.4 još nije podržana!)
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Pozdrav ${username}!`);
});
