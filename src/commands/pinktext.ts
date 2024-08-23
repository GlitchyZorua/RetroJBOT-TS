import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, ChatInputCommandInteraction } from 'discord.js';

export const pinktext = {
    data: new SlashCommandBuilder()
        .setName("pinktext")
        .setDescription("fetch pink text"),
    run: async (interaction: ChatInputCommandInteraction<CacheType>) => {
        const input = interaction.options.getString('name');
        await interaction.reply('https://coveryourselfinoil.com/text/osmium.php?t='+input); 
    }
};
