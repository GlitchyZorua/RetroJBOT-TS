import { SlashCommandBuilder } from "@discordjs/builders";


export const manifesto = {
    data: new SlashCommandBuilder()
        .setName("manifesto")
        .setDescription("Windows 93 Randomized Manifesto"),
    run: async (interaction: { reply: (arg0: string) => any; }) => {
      var A = [
        "retro-engineering",
        "reverse engineering",
        "deprogrammed obsolescence",
        "media archeology",
        "recycling",
        "retrocomputing",
        "parody",
        "inception",
        "666",
        "acid",
        "freedom",
        "infinity",
        "pony",
        "art",
        "demoscene",
        "memetic",
        "hysteria",
        "proselytism",
        "thought contagion",
        "install Gentoo",
        "dolphin",
        "corgi",
        "doge",
        "hydra",
        "helix",
        "yoda",
        "cat",
        "glitch",
        "troll",
        "noob",
        "ninja",
        "wizard",
        "lenna",
      ],
      B = [
        "easter egg",
        "php",
        "html",
        "html5",
        "javascript",
        "web3.0",
        "NaN",
        "Infinity",
        "random",
        "π",
        "inception",
        "css3",
        "css",
        "free software",
        "prosthetic knowledge",
        "(x,y,z)",
        "virus",
        "internet",
        "wifi",
        "open source",
        "GNU",
        "OS",
        "linux",
        "unix",
        "hyperlink",
        "copyleft",
        "creative commons",
        "MySQL",
        "RSS",
        "nodejs",
        "server",
        "hack",
        "iframe",
        "canvas",
        "glitch",
        "ASCII",
        "utf-8",
        "emoji",
        "cthulhu",
        "unicode",
      ],
      C = [
        "uchronia",
        "popart",
        "anachronism",
        "dadaism",
        "surrealism",
        "new-realism",
        "meta-realism",
        "future",
        "matrix",
        "inception",
        "unproductivity",
        "procrastination",
        "useless",
        "unprofitability",
        "spaghetti code",
        "viral",
        "acid",
        "epic fail",
        "epic win",
        "fap",
        "swag",
        "Z̤̲̙̙͎̥̝A͎̣͔̙͘L̥̻̗̳̻̳̳͢G͉̖̯͓̞̩̦O̹̹̺",
        "nope",
        "chuck norris",
        "over 9000",
        "meta",
        "meta-meta",
        "lulz",
        "poop",
        "glitch",
        "life",
        "system32.dll",
        "myspace",
        "loominati",
        "poney",
        "cthulhu",
        "zerg rush",
        "forever alone",
        "hug",
        "manifesto",
        "internet for ever",
        "fuck the cloud",
        "web3.0",
        "fixing the internet",
      ];
        const a0 = A[Math.floor(Math.random() * A.length)];
        const b0 = B[Math.floor(Math.random() * B.length)];
        const c0 = C[Math.floor (Math.random() * C.length)];
        await interaction.reply(`❔ ${a0} + ${b0} = ${c0}`); 
    }
};
