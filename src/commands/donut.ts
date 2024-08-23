import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const donut: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("donut")
    .setDescription("too many donuts"),
  run: async (interaction) => {
    await interaction.reply("**HALPPPPPPP I HAVE TOO MANY DONUTS** :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut:");
  },
};
