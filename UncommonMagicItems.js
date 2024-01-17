var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


function getRandomUpTo(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function runUncommon(UncommonItemsLength = 0, UncommonPotionsLength = 0, UncommonWeaponsLength = 0, UncommonArmorsLength = 0){


    document.getElementById('Utitle').innerHTML = "<br /> <p>Make sure to open the dndbeyond page before announcing the item.</p>" + "<br /> <p>Uncommon Items</p>";

    //Magical Items that are not weapons or armor
    var uncommonItems = new Array;
    uncommonItems[0] = "Alchemy Jug";
    uncommonItems[1] = "All-Purpose Tool";
    uncommonItems[2] = "Amulet of Proof against Detection and Location"
    uncommonItems[3] = "Amulet of the Devout UC";
    uncommonItems[4] = "Bag of Holding";
    uncommonItems[5] = "Bag of Tricks";
    uncommonItems[6] = "Barrier Tatto";
    uncommonItems[7] = "Bloodwell Vial";
    uncommonItems[8] = "Boots of Elvenkind";
    uncommonItems[9] = "Boots of the WInterlands";
    uncommonItems[10] = "Bracers of Arcehry";
    uncommonItems[11] = "Brooch of Shielding";
    uncommonItems[12] = "Cap of Water Breathing";
    uncommonItems[13] = "Circlet of Blasting";
    uncommonItems[14] = "CLoak of Elvenkind";
    uncommonItems[15] = "Cloak of Protection";
    uncommonItems[16] = "Cloak of the Manta Ray";
    uncommonItems[17] = "Coiling Grasp Tattoo";
    uncommonItems[18] = "Decanter of Endless Water";
    uncommonItems[19] = "Deck of Illusions";
    uncommonItems[20] = "Driftglobe";
    uncommonItems[21] = "Dust of Disapperance";
    uncommonItems[22] = "Dust of Dryness";
    uncommonItems[23] = "Dust of Sneezing and Choking CURSED! - Appears as dust of disapperance, and identify reveals it as such."
    uncommonItems[24] = "Eldritch Claw Tattoo";
    uncommonItems[25] = "Eversmoking Bottle";
    uncommonItems[26] = "Eyes of Charming";
    uncommonItems[27] = "Eyes of Minute Seeing";
    uncommonItems[28] = "Eyes of the Eagle";
    uncommonItems[29] = "Feywild Shard";
    uncommonItems[30] = "Gauntlets of Ogre Power";
    uncommonItems[31] = "Gem of Brightness";
    uncommonItems[32] = "Gloves of Missle Snaring";
    uncommonItems[33] = "Gloves of Swimming and Climbing"
    uncommonItems[34] = "Gloves of Thievery";
    uncommonItems[35] = "Goggles of Night";
    uncommonItems[36] = "Hat of Disguise";
    uncommonItems[37] = "Headband of Intellect";
    uncommonItems[38] = "Helm of Comprehending Languages";
    uncommonItems[39] = "Helm of Telepathy";
    uncommonItems[40] = "Immovable Rod";
    uncommonItems[41] = "Instrument of the Bards";
    uncommonItems[42] = "Keoghtom's Ointment";
    uncommonItems[43] = "Lantern of Revealing";
    uncommonItems[44] = "Philter of Love";
    uncommonItems[45] = "Pipes of Haunting";
    uncommonItems[46] = "Pipes of the Sewers";
    uncommonItems[47] = "Restorative Ointment";
    uncommonItems[48] = "Rhythm-Maker's Drum (+1 Bonus)";
    uncommonItems[49] = "Ring of Jumping";
    uncommonItems[50] = "Ring of Mind Shielding";
    uncommonItems[51] = "Ring of Swimming";
    uncommonItems[52] = "Ring of Warmth";
    uncommonItems[53] = "Ring of Water Walking";
    uncommonItems[54] = "Robe of Useful Items";
    uncommonItems[55] = "Rod of the Pact Keeper";
    uncommonItems[56] = "Robe of Climbing"; 
    uncommonItems[57] = "Saddle of the Cavalier";
    uncommonItems[58] = "Sending Stones";
    uncommonItems[59] = "Slipper os Spider Climbing";
    uncommonItems[60] = "Spell Scroll 2nd or 3rd Level (1d2)";
    uncommonItems[61] = "Spellwrought Tattoo 2nd or 3rd Level (1d2)"
    uncommonItems[62] = "Stone of Good Luck";
    uncommonItems[63] = "Wind Fan";
    uncommonItems[64] = "Winged Boots";

    var UncommonItemsReturnString = "";
    for(let i = 0; i < UncommonItemsLength; i++){
        var uncommonItemRNG = uncommonItems[getRandomUpTo(64)];
        UncommonItemsReturnString += uncommonItemRNG + ", ";
    }
    if(UncommonItemsReturnString.length < 1){
        UncommonItemsReturnString = UncommonItemsReturnString.slice(0,-1);
    }
    document.getElementById('uncommonI').innerHTML = ("<br /><b>Ucommon Items: </b> " + UncommonItemsReturnString); 

    var uncommonPotions = new Array;
    //Magical Potions
    uncommonPotions[0] = "Potion of Animal Friendship";
    uncommonPotions[1] = "Potion of Fire Breath";
    uncommonPotions[2] = "Potion of Hill Giant Strength";
    uncommonPotions[3] = "Potion of Growth";
    uncommonPotions[4] = "Potion of Healing";
    uncommonPotions[5] = "Potion of Poison";
    uncommonPotions[6] = "Potion of Resistance";
    uncommonPotions[7] = "Potion of Water Breathing";

    var UncommonPotionsReturnString = "";
    for(let i = 0; i < UncommonPotionsLength; i++){
        var uncommonPotionsRNG = uncommonPotions[getRandomUpTo(7)];
        UncommonPotionsReturnString += uncommonPotionsRNG + ", ";
    }
    UncommonPotionsReturnString = UncommonPotionsReturnString.slice(0,-1);
    document.getElementById('uncommonP').innerHTML = ("<br /><b>Ucommon Potions: </b> " + UncommonPotionsReturnString); 

    var uncommonWeapons = new Array;
    //Magical Weapons
    uncommonWeapons[0] = "Arcane Grimoire UC";
    uncommonWeapons[1] = "Boomerang +1";
    uncommonWeapons[2] = "Hew";
    uncommonWeapons[3] = "Javelin of Lightning";
    uncommonWeapons[4] = "Lightbringer";
    uncommonWeapons[5] = "Staff of the Adder";
    uncommonWeapons[6] = "Staff of the Python";
    uncommonWeapons[7] = "Sword of Vengeance CURSED!";
    uncommonWeapons[8] = "Trident of Fish Command";
    uncommonWeapons[9] = "Wand of Magic Detection";
    uncommonWeapons[10] = "Wand of Magic Missles";
    uncommonWeapons[11] = "Wand of Secrets"
    uncommonWeapons[12] = "Wand of the Warmage (+1 bonus)";
    uncommonWeapons[13] = "Wand of Web";
    uncommonWeapons[14] = "Simple Melee Weapon of Warning 1d11";
    uncommonWeapons[15] = "Simple Ranged Weapon of Warning 1d5";
    uncommonWeapons[16] = "Martial Melee Weapon of Warning 1d18";
    uncommonWeapons[17] = "Martial Ranged Weapon of Warning 1d7 (Normal Martial Weapons and First 2 Pistols)";
    uncommonWeapons[18] = "Simple +1 Melee Weapon";
    uncommonWeapons[19] = "Simple +1 Ranged Weapon";
    uncommonWeapons[20] = "Martial +1 Melee Weapon";
    uncommonWeapons[21] = "Martial +1 Ranged Weapon";

    var UncommonWeaponsReturnString = "";
    for(let i = 0; i < UncommonWeaponsLength; i++){
        var uncommonWeaponsRNG = uncommonWeapons[getRandomUpTo(21)];
        UncommonWeaponsReturnString += uncommonWeaponsRNG + ", ";
    }
    UncommonWeaponsReturnString = UncommonWeaponsReturnString.slice(0,-1);
    document.getElementById('uncommonW').innerHTML = ("<br /><b>Ucommon Weapons: </b> " + UncommonWeaponsReturnString); 

    var uncommonArmor = new Array;
    //Magical Armor
    uncommonArmor[0] = "Adamantine Armor";
    uncommonArmor[1] = "Sentinel Shield";
    uncommonItems[2] = "Sheild +1";


    var UncommonArmorsReturnString = "";
    for(let i = 0; i < UncommonArmorsLength; i++){
        var uncommonArmorsRNG = uncommonArmor[getRandomUpTo(2)];
        UncommonArmorsReturnString += uncommonArmorsRNG + ", ";
    }
    UncommonArmorsReturnString = UncommonArmorsReturnString.slice(0,-1);
    document.getElementById('uncommonA').innerHTML = ("<br /><b>Ucommon Armor: </b> " + UncommonArmorsReturnString); 
    return false;
}