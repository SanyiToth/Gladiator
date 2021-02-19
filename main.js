import {Gladiator} from "./gladiator.js";
import {Arena} from "./arena.js";


let max = new Gladiator("Maximus", "Trident");
let spar = new Gladiator("Spartacus", "Club")
let colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(spar)
colosseum.entertained()
colosseum.fight()










