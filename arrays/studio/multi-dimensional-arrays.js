let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArr = food.split(',').sort();
let equipmentArr = equipment.split(',').sort();
let petsArr = pets.split(',').sort();
let sleepAidsArr = sleepAids.split(',').sort();

console.log(foodArr);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = [foodArr, equipmentArr, petsArr, sleepAidsArr];
console.log(cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
cabinChoice = input.question ("Select a cabinet between 0-3 : ")


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


if((cabinChoice >= 4) ||  (cabinChoice < 0)) { 
    console.log("Wrong answer. Try Again!")
} else console.log(`Here is what's in that cabinet: \n${cargoHold[cabinChoice]}`)

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


userCabinet = input.question("Now select your cabinet (0-3): ");
userItem = input.question("Now enter your item: ");

if(cargoHold[userCabinet].includes(userItem)){
    console.log(`Cabinet "${userCabinet}" does contain "${userItem}"`)
} else console.log(`Your cabinet "${userCabinet}" does not contain "${userItem}"`);