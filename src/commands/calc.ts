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
      interaction.reply(":warning: Invalid or missing math expression. Syntax: `/calc <expression>`");
      return;
    }
    

    https.get(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(replaceSpecialPhrases(expression))}`, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        try {
        const result = data.trim();
          // const result = JSON.parse();
	if (!result) {
        throw new Error(":x: Invalid result. ");
    	}
          const CalcEmbed = {
            title: '🖩 Calculation Result',
            fields: [
              {
                name: 'Expression',
                value: `\`${expression}\``,
              },
              {
                name: 'Result',
                value: `\`${data}\``,
              },
            ],
          };
          interaction.reply({ embeds: [CalcEmbed] }).catch(error => {
            console.error("Error replying to interaction:", error);
            //interaction.reply(':no_entry: An error occurred while calculating the expression.'); // ```js\n'+error+'```
            
            //for whatever the fuck reason this isn't working as well as i thought it would. 
            //but it'll do for now.
          });
        } catch (error) {
          console.error(error);
          interaction.reply(":no_entry: An error occurred while calculating the expression. (Maybe the service is down?)");
        }
      });
    });
  },
};

function replaceSpecialPhrases(input: string): string {
  // Define special phrases and their replacements
  const replacements: Record<string, string> = {
    "the answer to life, the universe, and everything": "42",
    "the loneliest number": "1",
    "numbers of horns on a unicorn": "1",
    "bakers dozen": "13",
    "baker's dozen": "13",
    "the answer to [the ultimate question of] life the universe and everything":"42",
    "the answer to the ultimate question of life the universe and everything":"42",
    "once in a blue moon":"1.16699016 * 10^-8 hertz",
    "`":"'",
    "funny number":"69",
    "weed number":"420",
    "devil number":"666",
    "leet":"1337",
    "zero":"0",
    "one":"1",
    "two":"2",
    "three":"3",
    "four":"4",
    "five":"5",
    "six":"6",
    "seven":"7",
    "eight":"8",
    "nine":"9",
    "ten":"10",
    "plus":"+",
    "minus":"-",
    "divide":"/",
    "times":"*",
    "×":"*",
    "÷":"/"
  };

  // Replace special phrases with their values
  for (const phrase in replacements) {
    input = input.replace(new RegExp(phrase, 'g'), replacements[phrase]);
  }

  return input;
}



