import { Client } from "discord.js";
import { readFileSync } from "fs";
import { validateEnv } from "./utils/validateEnv.js";
import { onInteraction } from "./events/interaction.js";
import { onReady } from "./events/ready.js";

let packagedata = JSON.parse(readFileSync("./package.json", { encoding: "utf-8" }));
let version = packagedata["version"];

console.log(`\
########  ######## ######## ########   #######        ## ########   #######  ########
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## 
########  ######      ##    ########  ##     ##       ## ########  ##     ##    ## 
##   ##   ##          ##    ##   ##   ##     ## ##    ## ##     ## ##     ##    ##  
##     ## ########    ##    ##     ##  #######   ######  ########   #######     ## 
                            ╭─────────────────────────────╮
                            │ Connecting to discord.js... │
                            ╰─────────────────────────────╯
                                    v${version}`);

(async () => {
  if (!validateEnv()) return;

  const RetroJBOT = new Client({ intents: ["Guilds"] });

  RetroJBOT.on("ready", async () => await onReady(RetroJBOT));

  RetroJBOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );
  await RetroJBOT.login(process.env.TOKEN);
})();
