import { ChatInputCommandInteraction, CacheType } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export const rate = {
  data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('rate a thing')
    .addStringOption((option) =>
      option
        .setName('thing')
        .setDescription('thing to rate')
        .setRequired(true)
    ),

  async run(interaction: ChatInputCommandInteraction<CacheType>) {
    try {
      const myself = [
        "myself",
        "retrojbot",
        "@retrojbot",
        "<@612742660658167840>",
        "retrojbot#3932",
        "@retrojbot#3932",
        "461984828716482562",
      ]
      const shit = [
        "bluesky",
        "fortnite",
        "threads",
        "facebook",
        "tim sweeny",
        "meta",
        "epic games",
        "unreal engine",
        "AI",
        "Discord",
        "NFTs",
        "epicgames",
        "timsweeny"
      ]
      const text = interaction.options.getString('thing') ?? '';
      const num = Math.floor(Math.random() * 10)
      if (myself.includes(text.toLowerCase())){
        await interaction.reply('I rate myself 10/10');
        return
      }
      if (shit.includes(text.toLowerCase())){
        await interaction.reply('I rate '+ text + ' '+'0/10');
        return
      }
      if (text.toLowerCase() == "you can't activate this easter egg. isn't that weird?"){
        await interaction.reply('This message shouldn\'t appear... if you did then... congrats!');
        return
      }
      await interaction.reply('I rate '+ text + ' ' + num + '/10');
    } catch (error) {
      console.error(error);
      await interaction.reply(':x: An error occurred. Please try again.');
    }
  },
};