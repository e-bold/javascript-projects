let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 8,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Taldigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};


console.log(tardigrade.move());
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade]


// Print out the relevant information about each animal.

function crewReports(animal) {
   for (let i = 0; i < animal.length; i++) {
   console.log(animal[i].name + " is a " + animal[i].species + ". "+ "They are " + animal[i].age + " years old and " + animal[i].mass + " Kilograms. Their ID is " + animal[i].astronautID + "."); 
   } 
};

crewReports(crew)

// Start an animal race!

function fitnessTest (arr) {
   let sortedArr = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++) {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20) {
         numSteps += arr[i].move();
         turns++
      }
      sortedArr.push(`${arr[i].name} took ${turns} turns to take 20 steps.`)
   }
   return sortedArr
}

console.log(fitnessTest(crew));