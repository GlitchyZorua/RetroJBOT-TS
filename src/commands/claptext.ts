import { ChatInputCommandInteraction, CacheType } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export const claptext = {
  data: new SlashCommandBuilder()
    .setName('claptext')
    .setDescription('writes👏text👏like👏this')
    .addStringOption((option) =>
      option
        .setName('text')
        .setDescription('text to clapify')
        .setRequired(true)
    ),
  async run(interaction: ChatInputCommandInteraction<CacheType>) {
    try {
      const text = interaction.options.getString('text') ?? '';
      const clap = text.replace(/ /g, '👏');
      await interaction.reply(clap);
    } catch (error) {
      console.error('Error in claptext command:', error);
      await interaction.reply(':x: An error occurred. Please try again.');
    }
  },
};


// FUCK YOU GOOGLE BARD