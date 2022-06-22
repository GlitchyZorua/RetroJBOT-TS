import { CommandInterface } from "../interfaces/command";
import { ping } from "./ping.js";
import { binarytotext } from "./binarytotext.js";

export const CommandList: CommandInterface[] = [ping, binarytotext];
