import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const about: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("about the bot"),
  run: async (interaction) => {
    await interaction.reply(":information_source: A free and open-source bot. 100% free forever.\n This is a full rewrite of RetroJBOT in TypeScript. Because the original code was messy as hell. And we know it. \n\n2018-2023 🄯");
  },
};
