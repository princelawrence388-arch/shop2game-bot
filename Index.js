const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🎮 Welcome to Shop2Game Store!\n\nYour gaming store bot is online. 🚀"
  );
});

console.log("✅ Shop2Game Store Bot is running...");
