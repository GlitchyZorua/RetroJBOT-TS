import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const help: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows the list of commands"),
  run: async (interaction) => {
    await interaction.reply("ℹ️ You can view the list of commands from the wiki here: https://github.com/GlitchyZorua/RetroJBOT-TS/wiki/Commands");
  },
};
