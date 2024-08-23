import { CommandInteraction, Client } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInterface } from '../interfaces/command';

export const joke: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Tells you a funny joke'),
  async run(interaction: CommandInteraction) {
    try {
      // Use fetch for modern, promise-based HTTP requests
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode');
      const jokeData = await response.text();

      // Send the joke to the Discord channel
      await interaction.reply('🎭 '+jokeData);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching joke:', error);
      await interaction.reply({ content: '⛔ Oops, something went wrong fetching the joke. Please try again later.' });
    }
  },
};