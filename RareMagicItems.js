//Rare Items Page 2

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function getRandomUpTo(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function runRare(ItemLength = 0, PotionLength = 0, WeaponLength = 0, ArmorLength = 0){

    //Create Arrays

    var rareItems = new Array;
    var rarePotions = new Array;
    var rareWeapons = new Array;
    var rareArmors = new Array;

    //Fill Arrays

    rareItems[0] = "All-Purpose Tool";
    rareItems[1] = "Amulet of Health";
    rareItems[2] = "Amulet of the Devout Rare";
    rareItems[3] = "Astral Shard";
    rareItems[4] = "Astromancy Archive";
    rareItems[5] = "Atlas of Endless Horizons";
    rareItems[6] = "Bag of Beans";
    rareItems[7] = "Barrier Tattoo Rare";
    rareItems[8] = "Bead of Force";


    rarePotions[0] = null;


    rareWeapons[0] = "Alchemical Compendium";
    rareWeapons[1] = "Ammunition +2";
    rareWeapons[2] = "Arcane Grimoire Rare";
    rareWeapons[3] = "Bell Branch";


    rareArmors[0] = "Armor of Vulberability";
    rareArmors[1] = "Armor +1";
    rareArmors[2] = "Arrow-Catching Shield";
}