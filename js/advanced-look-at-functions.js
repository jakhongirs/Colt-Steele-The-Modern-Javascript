//Scope:

//Function Scope:
function personOne(){
  let name = "Jakhongir";
  const age = "22";
  let major = "IT"
  //console.log(name);
}

function personTwo(){
  let name = "Jonibek";
  const age = "18";
  let major = "IT"
  //console.log(name);
}

personOne()
personTwo()

//Another Example:

let bird = "Mandarin Duck"

function birdWatch() {
  let bird = "Eagle"

  console.log(bird);
}

birdWatch()
console.log(bird);