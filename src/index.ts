import { Client } from "discord.js";
import { validateEnv } from "./utils/validateEnv.js";
import {onInteraction} from "./events/interaction.js";
import {onReady} from "./events/ready.js"

(async () => {
  if (!validateEnv()) return;
  
  const RetroJBOT = new Client({intents: ["GUILDS"]});

  RetroJBOT.on("ready", async () => await onReady(RetroJBOT));

  RetroJBOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );
  await RetroJBOT.login(process.env.TOKEN);
})();