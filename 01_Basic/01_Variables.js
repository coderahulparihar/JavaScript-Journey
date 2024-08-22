
// var myname = "Rahul Parihar";
// function saymyname(){
//   console.log(myname);
// }
// saymyname();


// let anothername = "Rahul Mali";
// function saymyanothername(){
//   let newname = "Rakesh";
//   newname = "Kajal"
//   console.log(newname)
//   console.log(anothername)
// }
// console.log(newname);
// saymyanothername();

// const saymynewname = "Ronak Singh";
// function saymynewnamehere(){
//   const saymynewnameheremore = "Alex";
//   // saymynewnameheremore = "Alex Singh" // will throw error can`t reassignment to constant variables 
//   console.log(saymynewnameheremore);
//   console.log(saymynewname);
// }

// saymynewnamehere()


// // Let`s take example where you can use these all variables 

// function variables(){
//   var globalVar = "I'm accessible anywhere within this function";
//   if (true) {
//     let blockScopedVar = "I'm only accessible within this block";
//     const constantValue = "I cannot change";

//     // blockScopedVar and constantValue are accessible here
//     console.log(blockScopedVar);
//     console.log(constantValue);
    
    
//   }
// // blockScoped and constantValue are not accessible here
//   console.log(globalVar)
// }

// variables();

// const arr = ['one', 'two', 'three'];
// const str = 'Hello';

// const res = arr.includes('on');
// const anotherVar = arr.includes('onetwo');
// const newVar = str.includes('ll');

// console.log(res);
// console.log(anotherVar);
// console.log(newVar);


// // Create game using Include method 

// const validChoices = ['rock', 'paper', 'scissors'];

// function getUserChoice(choice){
//     // Convert the choice to lowercase to make the check case-insensitive
//     const userChoice = choice.toLowerCase();
//     if(validChoices.includes(userChoice)){
//     // Check if the user's choice is in the list of valid choices
//       console.log(`You chose: ${userChoice}`);
//     }
//     else{
//       console.log('Invalid choice, please choose rock, paper, or scissors.');
//     }
//   }

//   getUserChoice('rock');
//   getUserChoice('By');


//   // Program: Filtering Out Unwanted Words

//   const badWords = ['worst', 'bad', 'ugly'];

//   function filterMessage(message){
//     const splitWord = message.split(' ');

//     const filterWords = splitWord.filter(splitWord => !badWords.includes(splitWord));

//     const joinWords = filterWords.join(' ');

//     return joinWords;
//   }


// const displayMessage =   filterMessage('This is bad example');
// console.log(displayMessage)

// console.log(true == '');
// console.log('1' == 1);

// // Will display all the variables in one console using table 

// const accountId = 2000101;
// const accountUserName = "Rahul Parihar";
// const accountEmailId = "rahul@gmail.com";
// let accountType = 'Saving Current';
// let accountState; 
// /* let accountState variable not assign any value yet and let keyword creates a block-scoped variable and if we dont assign any value to it then,
//  variable is in temporial dead zone and The default value for such a variable is undefined. */

// console.table([accountId, accountUserName, accountEmailId, accountType]);
// console.log(accountState);



// var sayName = 'Rahul';
// sayName = "Raju"
// var sayName = "mali";
// console.log(sayName); // can re-decalre and re-assigned within the same scope.


// let sayanotherName = "Deepak";
//  sayanotherName = "Raju";
// console.log(sayanotherName); // can`t re-declare but can re-assigned within the same scope.


// const saythirdName = 'Ravi';
// // saythirdName = "Raju"
// console.log(saythirdName); // nor re-declare or re-assigned within the same scope. It is used for constants whose values should not change.




console.log(null > 0) // null will convert into number beacuse of > greater operator when u compare null to number 

/*
What it does: Checks if null is greater than 0.
Result: false
Explanation: In JavaScript, null is considered an "empty" or "nonexistent" value. When you compare null to a number using >,
JavaScript converts null to a number first. The numeric value of null is 0. So, this comparison is like checking if 0 > 0,
which is false.
*/

console.log(null == 0); // here null value will be considers as undefined bcz == convert the value to the same type 

/*
What it does: Checks if null is equal to 0.
Result: false
Explanation: The == operator checks for equality but also tries to
convert the values to the same type. However, null is only loosely equal to undefined, not to 0. So, null == 0 is false.
*/
console.log(null >= 0);  

/*
What it does: Checks if null is greater than or equal to 0.
Result: true
Explanation: Similar to the first case, null is converted to 0. So, this comparison is like checking if 0 >= 0, 
which is true.

*/

console.log('===============');

console.log(null == 0) // because of equal to oprator we got false 
console.log('null'=='null') 
console.log(null === 'null') 
console.log(null === null) 


console.log(null < 0); //  false 
console.log(null == 0); // false 
console.log(null >= 0); // true 


var value = 1 + "1";

console.log(typeof value);
console.log("1" + 1);
console.log(1 + "1");
console.log("1" + "1");


