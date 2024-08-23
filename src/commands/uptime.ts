import { CommandInteraction, Client } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInterface } from '../interfaces/command';

export const uptime: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('info about how long this bot has been up for'),
  run: async (interaction: CommandInteraction) => {
    const uptimeMs = interaction.client.uptime;
    const days = Math.floor(uptimeMs / 86400000);
    const hours = Math.floor(uptimeMs / 3600000) % 24;
    const minutes = Math.floor(uptimeMs / 60000) % 60;
    const seconds = Math.floor(uptimeMs / 1000) % 60;

    // Format the values with leading zeros if necessary
    const formattedUptime = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    await interaction.reply(`:arrow_up: Uptime: ${formattedUptime}\n\n:warning: Due to server limitations, the bot might go offline with or without notice.`);
  },
};