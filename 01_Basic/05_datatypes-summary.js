// There are some data types in Js 


const myname = "Rahul";
const SomeNumber = "123";

const changeDataType = Number(SomeNumber)
console.log( changeDataType);


const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);


// Array

const Avengers = ["Iron Man", "SpiderMan", "Thor", "Captain America"];
console.log(Avengers[0].toLocaleUpperCase());


// Objects 

const Hobbies = {
    GoodHabbites : "Going for walk",
    BadHabbites : "Not was hand before eat anything", 
    SomeMoreHabbites :  {
        NewOne : "Wake up at 7`o clock",
        OldOne : "Go to bad late",
        number : 9929593637
    }
}

const CheckDataType = Hobbies.SomeMoreHabbites.number;
const ConvertDataType = String(CheckDataType)
console.table(typeof ConvertDataType);


// Functions : Block of code which perform a paerticular task when function called 

function Greeting(name){
    const sayName = `Hello ${name}, How May I Help You`
    return sayName;
}

const callyourName = Greeting("Rahul")
console.log(callyourName);
