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
import { cook } from "./cook.js";
import { fact } from "./fact.js";
import { manifesto } from "./manifesto.js";
import { claptext } from "./claptext.js";
import { talkingflower } from "./talkingflower.js";
import { send } from "./send.js";
import { joke } from "./joke.js";
import { format } from "./format.js"
import { fortune } from "./fortune.js"
export const CommandList: CommandInterface[] = [fact, cook, ping, about, help, uselessweb, time, calc, eball, uptime, cards, donut, xn, coinflip, binarytotext, dice, manifesto, claptext, talkingflower, send, joke, format, fortune];
