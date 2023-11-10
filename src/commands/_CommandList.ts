// this will be overloaded with commands some day... too bad.
import { CommandInterface } from "../interfaces/command";
import { ping } from "./ping.js";
import { binarytotext } from "./binarytotext.js";
import { about } from "./about.js";
import { help } from "./help.js";
import { dice } from "./dice.js";
import { uselessweb } from "./uselessweb.js";
import { time } from "./time.js";
import { calc } from "./calc.js";
import { eball } from "./8ball.js";
import { uptime } from "./uptime.js";
import { cards } from "./cards.js";
import { donut } from "./donut.js";
import { xn } from "./69ball.js";
import { coinflip } from "./coinflip.js";
export const CommandList: CommandInterface[] = [ping, binarytotext, about, help, dice, uselessweb, time, calc, eball, uptime, cards, donut, xn, coinflip, ];