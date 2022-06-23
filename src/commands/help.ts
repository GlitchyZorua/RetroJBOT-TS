import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const help: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows the list of commands"),
  run: async (interaction) => {
    await interaction.reply(":warning: List of commands are unavalible at this time.");
  },
};
