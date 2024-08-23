import { SlashCommandBuilder } from '@discordjs/builders';
import { CacheType, ChatInputCommandInteraction } from 'discord.js';
export const gayscale = {
    data: new SlashCommandBuilder()
      .setName('gayscale')
      .setDescription('uses amazing algorithms to test if the user is gay or not... (99.99% chance would be inaccurate)')
      .addStringOption((option) =>
        option
          .setName('name')
          .setDescription('someone to "test"')
          .setRequired(true)
      ),
      async run(interaction: ChatInputCommandInteraction<CacheType>) {
        try {
          const inputt = interaction.options.getString('name');
          if (inputt?.toLowerCase() === "devil"){
            interaction.reply(':x: An error occurred. Please try again.');
            return
          }
          if (inputt?.toLowerCase() == "satan"){
            interaction.reply("**:smiling_imp: Satan** is 666% gay");
            return
          }
          const gay = Math.floor(Math.random() * 100);
          await interaction.reply(`:${gay > 50 ? "rainbow_flag" : "sweat_smile"}: **${inputt}** is ${gay}% gay${gay === 69 ? " ( ͡° ͜ʖ ͡°)" : ""}`);
        } catch (error) {
            console.error('Error in `/gayscale` command:', error);
            await interaction.reply(':x: An error occurred. Please try again.');
          }
        },
      };