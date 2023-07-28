import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
const ball = ["🟢 It is certain", "🟢 It is decidedly so", "🟢 Without a doubt", "🟢 Yes definitely", "🟢 You may rely on it", "🟢 As I see it, yes", "🟢 Most likely", "🟢 Outlook good", "🟢 Yes", "🟢 Signs point to yes", "🟡 Reply hazy try again", "🟡 Ask again later", "🟡 Better not tell you now", "🟡 Cannot predict now", "🟡 Concentrate and ask again", "🔴 Don't count on it", "🔴 My reply is no", "🔴 My sources say no", "🔴 Outlook not so good", "🔴 Very doubtful", "🔴 No"];


export const eball: CommandInterface = { // i can't fucking put numbers in variable names.
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the magic 8ball"),
  run: async (interaction) => {
    // ah yes, a hack, right up my ass.
    const ee = ball[Math.floor(Math.random() * ball.length - 1)]; // picks a random option from the list
    await interaction.reply("🎱 "+ ee); // ...and posts it.
  }
};
