import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import chalk from "chalk";
import { CommandList } from "../commands/_CommandList.js";
/*/
var donotload = false;
if (donotload = true){
  console.log(chalk.red("RetroJBOT is disabled by the owner."));
  process.exit(); // yes this a feature. don't ask why. it'll become useful in the future.
}
/*/

export const onReady = async (RetroJBOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN as string);

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationCommands(RetroJBOT.user?.id || "missing id"),
    { body: commandData }
  );

  console.log(chalk.green("Discord ready!"));
};
