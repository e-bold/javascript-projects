const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str2 = str.slice(3) + str.slice(0, 3);
console.log(str2);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We changed ${str} to ${str2} using string methods`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

relocated = input.question ("How many letters were relocated? : ")
console.log(relocated);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


if(relocated == 3){
    console.log("Correct answer!")
} else {
    console.log("Wrong answer!")

}

