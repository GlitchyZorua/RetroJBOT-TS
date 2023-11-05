import { ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import https from 'https';

export const calc = {
  data: new SlashCommandBuilder()
    .setName('calc')
    .setDescription('Calculate math expressions (100% eval safe)')
    .addStringOption(option =>
      option
        .setName('expression')
        .setDescription('Math expression')
        .setRequired(true),
    ),
  run: async (interaction: ChatInputCommandInteraction) => {
 const expression = interaction.options.getString('expression');


    if (!expression) {
      interaction.reply("Invalid or missing math expression.");
      return;
    }

    https.get(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);

          const CalcEmbed = {
            title: '🖩 Calculation Result',
            fields: [
              {
                name: 'Expression',
                value: expression,
              },
              {
                name: 'Result',
                value: result.result,
              },
            ],
          };

          interaction.reply({ embeds: [CalcEmbed] });
        } catch (error) {
          console.error(error);
          interaction.reply("An error occurred while calculating the expression.");
        }
      });
    });
  },
};
