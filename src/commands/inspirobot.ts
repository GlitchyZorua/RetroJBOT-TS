import { SlashCommandBuilder } from "@discordjs/builders";


export const inspirobot = {
    data: new SlashCommandBuilder()
        .setName("inspirobot")
        .setDescription("Get a random quote from inspirobot!"),
    run: async (interaction: { reply: (arg0: string) => any; }) => {
      const response = await fetch('https://inspirobot.me/api?generate=true');
      const data = await response.text();
        await interaction.reply(data); 
    }
};
