import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const about: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("about the bot"),
  run: async (interaction) => {
    await interaction.reply("A full rewrite of RetroJBOT in TypeScript. Because the orginal code was messy as hell. And we know it. Orginally 2018-2022 🄯");
  },
};
