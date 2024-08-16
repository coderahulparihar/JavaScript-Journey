
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
// console.log(newname);
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
