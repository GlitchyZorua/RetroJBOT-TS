import { ChatInputCommandInteraction, CommandInteractionOptionResolver } from 'discord.js';
import { SlashCommandBuilder } from "@discordjs/builders";

const talkedRecently = new Set<string>();
const percentages = ['1', '5', '9', '10', '20', '30', '40', '50', '60', '70', '80', '90', '99'];

export const format = {
  data: new SlashCommandBuilder()
    .setName('format')
    .setDescription('"Format" your hard drive'),

  run: async (interaction: ChatInputCommandInteraction) => {
    // Get the user who invoked the command and the thing they want to cook.
    const user = interaction.user;

    // Check if the user has already cooked recently.
    if (talkedRecently.has(user.id)) {
      interaction.reply({
        content: '⏰ **Cooldown** This command is on cool down. Wait 9 seconds.',
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
    const formatMessage = await interaction.reply({
      content: `:warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting... - 0%`,
    });

    // Create an interval loop to update the cooking progress message.
    let i = 0;
    const interval = setInterval(() => {
      if (i >= percentages.length) {
        // Finish cooking and send a success message to the user.
        formatMessage.edit(`✅ Format Complete\n(It doesn't actually format your hard drive)`);
        clearInterval(interval);
        return;
      }

      // Update the cooking progress message.
      formatMessage.edit(`:warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting... - ${percentages[i++]}%`);
    }, 1000);
  },
};
