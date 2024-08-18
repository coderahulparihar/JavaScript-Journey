/*

- Type Conversion : involves changing value from one data type to another data types 

There are two types type converion in JS 
- Implicit Type Conversion 
- Explicit Type Conversion 
*/


// Implicit Type Conversion : This happen automatically when JavaScript tries to perform operation on mismatched types 

const result = "5" + 3;
console.log(result);
console.log(typeof result);
// When you use + between a string and a number, JavaScript assumes you want to concatenate them as strings, not add them as numbers.

const result_2 = 5 + "3";
console.log(result_2);
console.log(typeof result_2);


// Number + Boolean
let sum = 5 + true;   // The boolean true is converted to 1, so the result is 6
console.log(sum);     // Outputs: 6

// String - Number
let difference = "10" - 2; // The string "10" is converted to the number 10, so the result is 8
console.log(difference); 


let score = "43";
console.log(typeof score);

let convertintoNumber = Number(score);
console.log(typeof convertintoNumber);
console.log("--------------------------------------------------");



// Write program to check if there is any words in number 

let lastNumber = "hjj33";

if(typeof lastNumber == 'string'){
     // Extract numbers from the string using a regular expression
     let numericPart = lastNumber.match(/\d+/);
    //  .match() method: This is a JavaScript string method that searches a string for a match against a regular expression (regex)
     console.log(numericPart);
     if(numericPart){
        console.log(parseInt(numericPart));
     }
     else{
        console.log("No numbers found");
     }
}else {
    console.log("Not a string");
}

// convert boolean 
const isLogged = "" ;
const booleanIsLoggedIn = Boolean(isLogged);
console.log(booleanIsLoggedIn);

const someNumber = 23;
const StringConversion = String(someNumber);
console.log(StringConversion);

