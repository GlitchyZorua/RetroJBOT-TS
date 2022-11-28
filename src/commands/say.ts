import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const test: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test command"),
    
  run: async (interaction) => {
    await interaction.reply("It works.");
    },
};


