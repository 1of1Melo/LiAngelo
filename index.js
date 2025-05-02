index.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'milossmrad.aternos.me', // ZAMENI sa IP adresom tvog servera
  port: 21233,              // standardni Minecraft port
  username: 'BotIme',       // može i email ako je premium nalog
  version: '1.21.4'         // verzija koju bot koristi (1.21.4 još nije podržana!)
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Pozdrav ${username}!`);
});
