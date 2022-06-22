import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandList.js";

export const onReady = async (RetroJBOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    process.env.TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationCommands(RetroJBOT.user?.id || "missing id"),
    { body: commandData }
  );

  console.log("Discord ready!");
};