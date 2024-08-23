import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
import superagent from "superagent";

export const fortune: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("fortune")
    .setDescription("open a fortune cookie"),
  run: async (interaction) => {
    const { body } = await superagent.get("http://www.yerkee.com/api/fortune/all");
    await interaction.reply("🥠 "+body.fortune);
  }
};
