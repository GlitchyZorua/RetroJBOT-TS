import { SlashCommandBuilder } from "@discordjs/builders";
import { CacheType, ChatInputCommandInteraction } from 'discord.js';
import superagent from "superagent";

export const texture = {
    data: new SlashCommandBuilder()
        .setName("texture")
        .setDescription("get a texture from TextureTown"),
    run: async (interaction: ChatInputCommandInteraction<CacheType>) => {
//Download the Manifest File
fetch("https://textures.neocities.org/manifest.json")
    .then((res) => res.json())
    .then(async (json) => {
        //Success! Your code goes here!
        let manifest = json;

        //Get the index of the fire category
        const input = interaction.options.getString('name');
        let fireIndex = manifest.catalogue
            .map(function (e: { name: any; }) {
                return e.name;
            })
            .indexOf(input); //

        //Pick a random image from that category
        let fireCatagoryFileCount = manifest.catalogue[fireIndex].files.length;
        let randomImageName = manifest.catalogue[fireIndex].files[
            Math.floor(Math.random() * fireCatagoryFileCount) + 1];

        //Create a full texture url
        let textureURL = manifest.info.base_url + "/" 
        + manifest.info.textures_folder + "/" + manifest.catalogue[fireIndex].name 
        + "/" + randomImageName;

        await interaction.reply(textureURL); 
    });
    }
};

                