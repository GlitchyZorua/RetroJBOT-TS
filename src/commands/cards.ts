import { CommandInterface } from "../interfaces/command";
import { SlashCommandBuilder } from "@discordjs/builders";
const card = [':diamonds:  Ace of Diamonds',':diamonds:  2 Diamonds',':diamonds:  3 Diamonds',':diamonds:  4 Diamonds',':diamonds:  5 Diamonds',':diamonds:  6 Diamonds',':diamonds:  7 Diamonds',':diamonds:  8 Diamonds',':diamonds:  9 Diamonds',':diamonds:  10 Diamonds',':diamonds:  King Diamonds',':diamonds:  Queen Diamonds',':diamonds:  Jack Diamonds',':black_joker: A joker',':hearts: King heart',':hearts: Queen heart',':hearts: Jack heart',':spades: Ace of spades',':spades: 2 spades',':spades: 3 spades',':spades: 4 spades',':spades: 5 spades',':spades: 6 spades',':spades: 7 spades',':spades: 8 spades',':spades: 9 spades',':spades: 10 spades',':spades: King spades',':spades: Queen spades',':spades: Jack spades'];

// https://www.piliapp.com/emoji/list/playing-cards/

export const cards: CommandInterface = { // i can't fucking put numbers in variable names.
  data: new SlashCommandBuilder()
    .setName("cards")
    .setDescription("Picks a random playing card"),
  run: async (interaction) => {
    const ee = card[Math.floor(Math.random() * card.length - 1)]; // picks a random option from the list
    await interaction.reply(ee); // ...and posts it.
  }
};


//U+1F0Ax 	🂠 	🂡 	🂢 	🂣 	🂤 	🂥 	🂦 	🂧 	🂨 	🂩 	🂪 	🂫 	🂬 	🂭 	🂮 	
//U+1F0Bx 		🂱 	🂲 	🂳 	🂴 	🂵 	🂶 	🂷 	🂸 	🂹 	🂺 	🂻 	🂼 	🂽 	🂾 	🂿
//U+1F0Cx 		🃁 	🃂 	🃃 	🃄 	🃅 	🃆 	🃇 	🃈 	🃉 	🃊 	🃋 	🃌 	🃍 	🃎 	🃏
//U+1F0Dx 		🃑 	🃒 	🃓 	🃔 	🃕 	🃖 	🃗 	🃘 	🃙 	🃚 	🃛 	🃜 	🃝 	🃞 	🃟
//U+1F0Ex 	🃠 	🃡 	🃢 	🃣 	🃤 	🃥 	🃦 	🃧 	🃨 	🃩 	🃪 	🃫 	🃬 	🃭 	🃮 	🃯
//U+1F0Fx 	🃰 	🃱 	🃲 	🃳 	🃴 	🃵 	