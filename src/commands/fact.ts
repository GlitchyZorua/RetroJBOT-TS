import { SlashCommandBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction, CommandInteractionOptionResolver } from 'discord.js';
import { CommandInteraction } from "discord.js";
import https from 'https';

export const fact = {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('Get a random useless/useful fact.'),

  async run(interaction: CommandInteraction) {
    try {
      const randomFact = await getRandomFact('en');
      interaction.reply(`${randomFact}`);
    } catch {
      interaction.reply(':x: An error occurred while fetching the random fact.');
    }
  },
};

async function getRandomFact(language: string = 'en'): Promise<string> {
  const options = {
    hostname: 'uselessfacts.jsph.pl', 
    path: `/api/v2/facts/random?language=${language}`,
    headers: {
      'Accept': 'text/plain',
    },
  };

  return new Promise((resolve, reject) => {
    const request = https.get(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    });

    request.on('error', (error) => {
      reject(error);
      console.log(error)
    });
  });
}
