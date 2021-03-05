/* -------------------------------------------------------------------------------------------------------- */
// Our first function:

/* function funcName(){
  console.log("Assalomu Alaykum");
  console.log("Hello");
  console.log("Здравствуйте");
}

funcName()
funcName()
funcName() */
/* -------------------------------------------------------------------------------------------------------- */
// Dice Roll:

/* function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(){
  diceRoll();
  diceRoll();
  diceRoll();
  diceRoll();
  diceRoll();
  diceRoll();
}

throwDice(); */
/* -------------------------------------------------------------------------------------------------------- */
//Introducing Arguments:

/* function greet(name){
  console.log(`Hi ${name}`);
}

//One more example:

function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(times){
  for(let i = 0; i < times; i++){
    diceRoll()
  }
} */
/* -------------------------------------------------------------------------------------------------------- */
//Functions with multiple arguments:

/* function multiply(x, y){
	console.log(x * y)
}

function divide(x, y){
	console.log(x / y)
} */
/* -------------------------------------------------------------------------------------------------------- */
//The return statement:

/* function add(a, b){
  return a + b;
}

const sum = add(10, 26);
sum */

//Returnlarni faqat biz if lar ichida ikki marta ishlatsak bo'ladi:

/* function isBlue(color){
  if(color === 'blue'){
    return true
  } else{
    return false
  }
} */
/* -------------------------------------------------------------------------------------------------------- */
//Practice Functions:

/* Finding average number in the array */

/* function avg(array){
  let total = 0;

  for(num of array){
    total += num
  }

  let res = total / array.length

  return res
} */
