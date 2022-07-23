import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const dice: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Shake the dice.")
    .addStringOption((option) =>
      option
        .setName("dice")
        .setDescription("Roll the dice")
        .setRequired(false)
    ),
  run: async (interaction) => {
    let string: String | null = interaction.options.getString("dice");
    let text = string
    if (text == null) { text = 6 }  
    if (isNaN(text)) { interaction.reply("ℹ️ Not a number") }
    await interaction.reply('🎲 '+Math.floor(Math.random() * text));
    }
  },
};
