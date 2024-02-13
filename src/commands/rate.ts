import { ChatInputCommandInteraction, CacheType } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export const rate = {
  data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('rate a thing')
    .addStringOption((option) =>
      option
        .setName('thing')
        .setDescription('thing to rate')
        .setRequired(true)
    ),
  async run(interaction: ChatInputCommandInteraction<CacheType>) {
    try {
      const text = interaction.options.getString('thing') ?? '';
      const num = Math.floor(Math.random() * 10)
      await interaction.reply('I rate '+ text + ' ' + num + '/10');
    } catch (error) {
      console.error(error);
      await interaction.reply(':x: An error occurred. Please try again.');
    }
  },
};