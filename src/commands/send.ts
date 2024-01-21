import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";


export const send: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("send a message to my server!"),
  run: async (interaction) => {
    await interaction.reply("Coming Soon...");
  }
};
