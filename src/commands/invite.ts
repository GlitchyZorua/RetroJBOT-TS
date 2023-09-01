import { CommandInteraction, Client } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInterface } from '../interfaces/command';

export const uptime: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('invite for my server and for info on how you can invite the bot.'),
  run: async (interaction: CommandInteraction) => {
    await interaction.reply("**Invite:** https://urls.ziad87.net/8SjwND\n**Our server:** https://discord.gg/EYt579b");
  },
};