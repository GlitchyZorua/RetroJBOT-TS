import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
const flowerquotes = ["Onward and upward!", "What a beautiful day.", 'Oh, was it something I said?', "That Goomba looks so serene.", "Well then.", "Mmm, refreshing!", "Ahaha!", "Oh!", "Coiiiiins!", "Would ya look at that!", "Heyyyy!", "Well, that was something.", "Hiiii!", "Thank you! That trunk sure is useful, huh?", "I want some water too!", "Waterrrr!", "Whoa...", "Whoa!", "Whoa-whoa!", "What's that?", "Hey, you! What WAS that?","Didn't you see something back there?","Are you just gonna leave?","Bye-bye!", "So long!", "Wonder if you can get over there...", "So you CAN get over there!", "Walking plants, huh?\nAlmost as weird as talking plants.", "Ooh, that's a pretty flower.\nUmmmm...\nAre they... singing?\nThey're singing.", "Ouch!","Hey!", "Agh!", "Stop!", "I said stop!", "Wait a sec!\nHow'd you get over here?","You should come back sometime.","Heeeey!\nWhat are you doing?"]
export const talkingflower: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("talkingflower")
    .setDescription("What does the talking flower say? (spoilers for super mario wonder)"),

  run: async (interaction) => {
    await interaction.reply('>>> <a:TalkingFlower:1198733722598514778> '+flowerquotes[Math.floor(Math.random() * flowerquotes.length)]);
  },
};
