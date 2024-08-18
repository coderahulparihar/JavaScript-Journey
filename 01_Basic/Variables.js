
/*
var myname = "Rahul Parihar";
function saymyname(){
  console.log(myname);
}
saymyname();


let anothername = "Rahul Mali";
function saymyanothername(){
  let newname = "Rakesh";
  newname = "Kajal"
  console.log(newname)
  console.log(anothername)
}
console.log(newname);
saymyanothername();

const saymynewname = "Ronak Singh";
function saymynewnamehere(){
  const saymynewnameheremore = "Alex";
  // saymynewnameheremore = "Alex Singh" // will throw error can`t reassignment to constant variables 
  console.log(saymynewnameheremore);
  console.log(saymynewname);
}

saymynewnamehere()


// Let`s take example where you can use these all variables 

function variables(){
  var globalVar = "I'm accessible anywhere within this function";
  if (true) {
    let blockScopedVar = "I'm only accessible within this block";
    const constantValue = "I cannot change";

    // blockScopedVar and constantValue are accessible here
    console.log(blockScopedVar);
    console.log(constantValue);
    
    
  }
// blockScoped and constantValue are not accessible here
  console.log(globalVar)
}

variables();
*/

const arr = ['one', 'two', 'three'];
const str = 'Hello';

const res = arr.includes('on');
const anotherVar = arr.includes('onetwo');
const newVar = str.includes('ll');

console.log(res);
console.log(anotherVar);
console.log(newVar);


// Create game using Include method 

const validChoices = ['rock', 'paper', 'scissors'];

function getUserChoice(choice){
    // Convert the choice to lowercase to make the check case-insensitive
    const userChoice = choice.toLowerCase();
    if(validChoices.includes(userChoice)){
    // Check if the user's choice is in the list of valid choices
      console.log(`You chose: ${userChoice}`);
    }
    else{
      console.log('Invalid choice, please choose rock, paper, or scissors.');
    }
  }

  getUserChoice('rock');
  getUserChoice('By');


  // Program: Filtering Out Unwanted Words

  const badWords = ['worst', 'bad', 'ugly'];

  function filterMessage(message){
    const splitWord = message.split(' ');

    const filterWords = splitWord.filter(splitWord => !badWords.includes(splitWord));

    const joinWords = filterWords.join(' ');

    return joinWords;
  }


const displayMessage =   filterMessage('This is bad example');
console.log(displayMessage)

console.log(true == '');
console.log('1' == 1);

// Will display all the variables in one console using table 

const accountId = 2000101;
const accountUserName = "Rahul Parihar";
const accountEmailId = "rahul@gmail.com";
let accountType = 'Saving Current';
let accountState;

console.table([accountId, accountUserName, accountEmailId, accountType]);
console.log(accountState);



var sayName = 'Rahul';
sayName = "Raju"
var sayName = "mali";
console.log(sayName); // can re-decalre and re-assigned within the same scope.


let sayanotherName = "Deepak";
 sayanotherName = "Raju";
console.log(sayanotherName); // can`t re-declare but can re-assigned within the same scope.


const saythirdName = 'Ravi';
// saythirdName = "Raju"
console.log(saythirdName); // nor re-declare or re-assigned within the same scope. It is used for constants whose values should not change.




