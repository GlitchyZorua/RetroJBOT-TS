import { CommandInterface } from "../interfaces/command";
import { ping } from "./ping.js";
import { binarytotext } from "./binarytotext.js";
import { about } from "./about.js";
import { help } from "./help.js";

export const CommandList: CommandInterface[] = [ping, binarytotext, about, help];
