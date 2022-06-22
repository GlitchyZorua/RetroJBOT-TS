import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const ping: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping the bot"),
    run: async (interaction) => {
        await interaction.reply("Pong!");
    },
};