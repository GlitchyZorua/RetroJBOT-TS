import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const time: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("time")
    .setDescription("Grabs Date & Time"),
  run: async (interaction) => {
    const unix = Math.floor(Date.now() / 1000);
    interaction.reply(`🕒 <t:${unix}:T>`);
  }
};
