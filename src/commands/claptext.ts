import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const claptext: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("claptext")
    .setDescription("👏writes👏text👏like👏this")
    .addIntegerOption((option) =>
      option
        .setName("text")
        .setDescription("clapify text")
        .setRequired(true)
    ),
  run: async (interaction) => {
    let text: String | null = interaction.options.getString('claptext');
    if (text == null){
      interaction.reply(':x: `text` equals `null`. How did you even do that?');
      console.error('text equals null. How did you even do that?');
      return;
    }
    let clap = text.replace(/ /g, '👏');
    await interaction.reply(clap);
    }
  };
