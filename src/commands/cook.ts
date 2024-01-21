import { ChatInputCommandInteraction, CommandInteractionOptionResolver } from 'discord.js';
import { SlashCommandBuilder } from "@discordjs/builders";
var Filter = require('bad-words'),
    filter = new Filter();
    filter.addWords('sandwich', 'sandwhich');
const talkedRecently = new Set<string>();
const percentages = ['1', '5', '9', '10', '20', '30', '40', '50', '60', '70', '80', '90', '99'];
export const cook = {
  data: new SlashCommandBuilder()
    .setName('cook')
    .setDescription('Cook something.')
    .addStringOption(option =>
      option
        .setName('thing')
        .setDescription('The thing to cook.')
        .setRequired(true),
    ),
  run: async (interaction: ChatInputCommandInteraction) => {
    // Get the user who invoked the command and the thing they want to cook.
    const user = interaction.user;
    const thing = interaction.options.getString('thing');

    // Check if the user has already cooked recently.
    if (talkedRecently.has(user.id)) {
      interaction.reply({
        content: '⏰ **Cooldown** You are cooking too fast! Please slow down after 9 seconds.',
        ephemeral: true,
      });
      return;
    }

    // Add the user to the cooldown liSst.
    talkedRecently.add(user.id);

    // Remove the user from the cooldown list after 9 seconds.
    setTimeout(() => {
      talkedRecently.delete(user.id);
    }, 9000);

    // Send a message to the user indicating that their cooking is in progress.
    const cookMessage = await interaction.reply({
      content: `<a:Loading_Color:759914061696860202> **COOKING** ${filter.clean(thing)} 0%`,
    });

    // Create an interval loop to update the cooking progress message.
    let i = 0;
    const interval = setInterval(() => {
      if (i >= percentages.length) {
        // Finish cooking and send a success message to the user.
        cookMessage.edit(`**DONE COOKING** Successfully cooked ${filter.clean(thing)}!`);
        clearInterval(interval);
        return;
      }

      // Update the cooking progress message.
      cookMessage.edit(`<a:Loading_Color:759914061696860202> **COOKING** ${filter.clean(thing)} - ${percentages[i++]}%`);
    }, 1000);
  },
};

