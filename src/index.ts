import { Client } from "discord.js";
import { validateEnv } from "./utils/validateEnv.js";

(async () => {
  if (!validateEnv()) return;
  
  const RetroJBOT = new Client({intents: ["GUILDS"]});

  RetroJBOT.on("ready", () => console.log("Connected to Discord!"));
  await RetroJBOT.login(process.env.TOKEN);
})();