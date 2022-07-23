import { Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList.js";

export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  for (const Command of CommandList) {
    if (interaction.commandName === Command.data.name) {
      await Command.run(interaction);
      break;
    }
  }
};
