import onion from "./onion";
import snow from "./snow";
import spring from "./spring";
import catinanemptyapt from "./catinanemptyapt";
import prologue from "./prologue";
import thanksgivingprayer from "./thanksgivingprayer";
import threeoddestwords from "./threeoddestwords";

import { Collection } from "../collection";

export default {
  name: "Poetry",
  works: [prologue, snow, spring, onion, catinanemptyapt, threeoddestwords, thanksgivingprayer],
} as Collection;
