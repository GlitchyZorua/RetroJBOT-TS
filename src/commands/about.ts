import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const ping: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot"),
  run: async (interaction) => {
    await interaction.reply("ℹ  A full rewrite of the entire code, written in TypeScript. Because the orginal code was messy as hell. And we know it. Orginally 2018-2022 🄯"); //This is suppose to be a copyleft symbol. but vscodes fonts don't seem to support it 
  },
};
