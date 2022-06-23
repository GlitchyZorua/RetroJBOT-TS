import { CommandInterface } from "../interfaces/command";
import { ping } from "./ping.js";
import { binarytotext } from "./binarytotext.js";
import { about } from "./about";
import { help } from "./help";

export const CommandList: CommandInterface[] = [ping, binarytotext, about, help];
