//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(`${language.slice(0, 1)}${language.slice(4, 5)}`)

//2. Without using slice(), use method chaining to accomplish the same thing.

let languageArr = language.split("");
console.log(languageArr[0].concat(language[4]));

//let initials = language[0]+language[4];
//console.log(initials);
//I tried it couple different ways.

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${language} is '${language[0]}${language[4]}'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let java = language.toUpperCase().slice(0, 4);
let script = language.toLowerCase().slice(4);
console.log(java.concat(script));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let upperT = notTitleCase.slice(0, 1).toUpperCase();
let upperC = notTitleCase.slice(6, 7).toUpperCase();


console.log(`${upperT}${notTitleCase.slice(1, 6)}${upperC}${notTitleCase.slice(7)}`);