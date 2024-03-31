//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element3 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

table = [element1, element2, element3];
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);
console.log(table[1][2]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2], table[1][0]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

//Make, Model, Year
car1 = ["Toyota", 'Camry', 2010];
car2 = ['Tesla', 'Model X', 2022];
car3 = ['Volkswagen', 'Atlas', 2020];
favCars = [car1, car2, car3];


//Brand, Model, Price
phone1 = ['Nokia', 'E72', '$469'];
phone2 = ['Sony Ericsson', "Walkman W800", "$599"];
phone3 = ['Samsung', 'Galaxy S2', '$350'];
favPhones =[phone1, phone2, phone3];


favItems = [favCars, favPhones];
console.log(`${favItems[0][1][1]}\n${favItems[1][2]}\n${favItems[0]}`);