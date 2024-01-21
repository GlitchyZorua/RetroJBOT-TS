import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const dice: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Shake the dice.")
    .addIntegerOption((option) =>
      option
        .setName("sides")
        .setDescription("the amount of sides on a dice")
        .setRequired(false)
    ),
  run: async (interaction) => {
    let text: number | null = interaction.options.getInteger("dice");
    if (text == null) {text = 6 }  
    if (isNaN(text)) { interaction.reply("ℹ️ Not a number") }
    await interaction.reply('🎲 '+Math.floor(Math.random() * text));
    }
  };
