import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
const nball = ['🟢 of course you uneducated paperclip', '🔴 of course not. I bet you eat Nintendo switch cartridges of fortnity-nite for breakfast', '🟡 idk dude, btw i dont care, btw fuck u', '🟡 ahh im 2much lazy 2 answer now, ask again later', '🟡 dude idgaf, that question is a crap, i ll not respont it', '🔴 OMG NO, OFC NO, R YA CRAZZZZZZYYYY?', '🟡 hm? What? Sorry, I was too busy staring at that ugly mask of yours. Whats that? Its not a mask?', '🟡 Can I ignore you some other time?','🟡 this isn\'t yahoo answers','🟡 i don\'t have an opinion on it, you idiot.','🔴 no you fucking talking flower from super mario wonder for the switch.','🔴 uhhh... no.','🔴 no. stop asking me stupid questions.']
export const xn: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("69ball")
    .setDescription("talk to the funny 69ball."),
  run: async (interaction) => {
    const ee = nball[Math.floor(Math.random() * nball.length - 1)];
    await interaction.reply("🎱 "+ ee);
  },
};
