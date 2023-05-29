import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder, EmbedBuilder } from "@discordjs/builders";

export const calc: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("calc")
    .setDescription("calculate stuff (100% eval safe)")
    .addStringOption((option) => option
      .setName("expression")
      .setDescription("math")
      .setRequired(true)
  ),
  run: async (interaction) => {
    const text = interaction.options.getString("text", true);
    require('https').get(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(text)}`)
    const CalcEmbed = new EmbedBuilder()
	  .setTitle(`🖩 ${text}`)
    interaction.reply({ embeds: [CalcEmbed] });
  }
};