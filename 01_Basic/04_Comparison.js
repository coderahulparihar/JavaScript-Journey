/* 

Q: What is comparison in javascript ? 
Ans: 
- Comparison refers to evaluating two values against each other using operators to determine their relationship

There are some types of comparison in js
- Equality (==)
- Strict Equality (===)
- Inequality (!=) : not equal to
- Strict Inequality (!==) Strict not equal to
- Greater Than (>)
- Less Than (<)
- Greater Than or Equal (>=)
- Less Than or Equal (<=)

*/


// 1. Equality (==) : The equal to compares two values for equality. It returns true if values are equal and false if they are equal to
//The == operator tries to compare the values by first converting them to a common type
console.log(5 == 5);
console.log(5 == "5");
console.log(5 == 6);
console.log("5" == 5);



//2 : - Strict Equality (===) : The strict equal to compare two value for equality without converting them into common type 

console.log(5 === 5);
console.log(5 === "5"); // false 


//3 : - Inequality (!=) : not equal to  : It will convert values into common type 

let myPhoneNumber = 99295853637;

if(myPhoneNumber != "99"){
    console.log('Yes');
}else{
    console.log('No');
}

//4 : Strictly Inequality (!==) : It will not convert values into common types 

let anotherNumber = 99295853637;

if(anotherNumber !== "99295853637"){
    console.log('Yes');
}else{
    console.log('No');
}


// Some Comparisons

console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true 

// The reason is that an equality check == and comparison > <> = <= work differently 
// Comparison convert null to a number, treating it as 0.
// That`s why (3) null >= 0 is true and (1) null > 0 is false 






console.log(undefined == 0);
console.log("2" > true);

