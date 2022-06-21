import { Client } from "discord.js";

(async () => {
  const RetroJBOT = new Client();

  await RetroJBOT.login(process.env.BOT_TOKEN);
})();