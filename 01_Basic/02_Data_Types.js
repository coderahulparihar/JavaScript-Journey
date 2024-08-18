
// What are the Data Types in JS 

console.log("Rahul");  console.log("Parihar"); //  will run the code, but it destroys readability


// There are seven type of data types in JS 
const StringData = "I am String Data Type ";
const NumberData = 18; 
const booleanData = true | false;
const nullData = null;  // standalone value 
const undefinedData = undefined; // variable declared but not assign any value to it 
const symbolData = Symbol('id'); // unique value 
const bigintData = BigInt('123456789101112131415'); //larger number

console.table([StringData, NumberData, booleanData, nullData, undefinedData,symbolData, bigintData]);

console.log(typeof NumberData);
console.log(typeof bigintData);
console.log(typeof symbolData);
console.log(typeof undefinedData);


const anothersymbolData = Symbol('id');

console.log(symbolData == anothersymbolData);  // will give False because symbol represent the unique value 






