import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
export const coinflip: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("flip a coin. see what it lands on."),
  run: async (interaction) => {
    await interaction.reply(`:coin: The coin landed on **${Math.random() > 0.5 ? "Heads" : "Tails"}**!`);
  },
};
