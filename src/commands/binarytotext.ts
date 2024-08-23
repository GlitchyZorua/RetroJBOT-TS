import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const binarytotext: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("binarytotext")
    .setDescription("Converts binary to text.")
    .addStringOption((option) =>
      option
        .setName("binary")
        .setDescription("Binary code to convert.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    let to_convert: String | null = interaction.options.getString("binary");
    if (to_convert == null){
      interaction.reply(':x: `to_convert` equals `null`. How did you even do that?');
      console.error('to_convert equals null. How did you even do that?');
      return;
    }
    let text = to_convert
      .split(" ")
      .map((elem) => String.fromCharCode(parseInt(elem, 2)))
      .join("");
    await interaction.reply(text);
  },
};
