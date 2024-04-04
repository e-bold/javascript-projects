function sayHello() {
   console.log("Hello, World!");
}

sayHello();
let returnVal = console.log("LaunchCode");
console.log(returnVal);

function pastThePointOfReturn() {
   return "I'm done!";
   console.log("This will not be printed");
}

console.log(pastThePointOfReturn());

function countToN(n) {
   let count = 1;
   while (true) {
       if (count > n) {
           return;
       }
       console.log(count);
       count++;
   }
}
function isEven(n) {
   return n % 2 === 0;
}

console.log(isEven(5));

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');


function removeHyphens(str) {
   let strWithoutHyphens = ''

   for (let i = 0; i < str.length; i++) {
   if (str[i] !== '-') {
       strWithoutHyphens += str[i];
   }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));





function printMessage() {
   let message = "Hello, World!";
   message = "Goodbye";
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

console.log(reverse(kayak));