var NPC = require("./NPC");
var MeleeEnemy = require("./MeleeEnemy");
var settings = require("./settings");

var wolf1 = new MeleeEnemy(
    settings.HardWolf.name,
    settings.HardWolf.lvl,
    settings.HardWolf.attackStrength,
    settings.HardWolf.attackSpeed
);

var wolf2 = new MeleeEnemy(
    settings.SimpleWolf.name, 
    settings.SimpleWolf.lvl,
    settings.SimpleWolf.attackStrength,
    settings.SimpleWolf.attackSpeed
);

var NPCExample = NPC.create();

console.log( wolf1 );
console.log( wolf2 );
console.log( NPCExample );

console.log( wolf1.name );
console.log(  );
