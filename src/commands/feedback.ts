import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const feedback: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("We are always looking for feedback!"),
   /*/
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("suggest a thing or whatever")
        .setRequired(true)
    /*/
    //)

    // not doing this crap.
  run: async (interaction) => {
    await interaction.reply(':speech_balloon: If you are looking to send feedback, Send us an issue or pull request at our github! https://github.com/GlitchyZorua/RetroJBOT-TS\n :service_dog: You may also send a feedback via the support channel in our discord server. (/invite). Thanks for using RetroJBOT.\n\n:money_with_wings: **We don\'t take donations, as of right now.**');
  },
};
