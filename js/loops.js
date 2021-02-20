/* 7) The World of Loops: */

/* -------------------------------------------------------------------------------------------------------- */
//For Loops:

/* For loop 3ta narsa qabul qilib oladi: */
/*  - 1: Variable bu variable biz uchun counter bo'lib turadi va nechinchidan boshlanishini aytamiz:
    - 2: Keyin esa qachon loop tugashini aytamiz stopping point ko'rsatamiz masalan qachonki variable < 10 
         less than 10 bo'lgunicha ishlagin deyishimiz mumkin.
    - 3: The third step is what happens to this variable each time through +1 */ 

    //Syntax:

    /* for (
      initialExpression;
      condition;
      incrementExpression;
    ) */

    //masalan:

    /* for(let i = 0; i <= 10; i++){
      console.log(i);
    } */
/* -------------------------------------------------------------------------------------------------------- */
//Infinite Loops:

/* Don't Run this 

    for(let i = 20; i >= 0; i++ ){
      console.log(i)
    }
*/
/* -------------------------------------------------------------------------------------------------------- */

// For Loops and Arrays:

/* const animals = ['tiger', 'dog', 'cat']

for(let i = 0; i < animals.length; i++){
  console.log(i, animals[i]);
} */

//Another Example:
/* 
const students = [
  {
    name: 'Jakhongir',
    mark: 80,
  },

  {
    name: 'Jonibek',
    mark: 85,
  },

  {
    name: 'Ulmas',
    mark: 90,
  },

  {
    name: 'Shahzod',
    mark: 95,
  },
]

let totalMarks = 0;

for(let i = 0; i < students.length; i++){
  let student = students[i] */

  /* console.log(`${student.name} scored: ${student.mark}`); */

 /*  totalMarks += student.mark;

  var averageMark = totalMarks / students.length;
} */

/* console.log(averageMark); */
/* -------------------------------------------------------------------------------------------------------- */
//Nested for Loops:

/* const gameBoard = [
  [4, 88, 15, 0],
  [11, 2, 7, 43],
  [0, 23, 3, 5],
  [6, 19, 23, 28],
]

let totalScore = 0;

for(let i = 0; i < gameBoard.length; i++){
  let row = gameBoard[i]

  for(let j = 0; j < row.length; j++){
    totalScore += row[i]

  }
}
  console.log(totalScore); */
/* -------------------------------------------------------------------------------------------------------- */
//Intro to While Loops:
//While condition is true run this code, when condition will be false code will stop 
/* let j = 0;

while(j <= 5){
  j++
  console.log(j);
} */
/* -------------------------------------------------------------------------------------------------------- */
//Break Keyword:
//Biz buni looplarda ishlatsak bo'ladi, ko'pincha while bilan ishlatiladi, o'sha while loop true bo'lsa break deymiz.

/* const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true){
  if(target === guess) break;
  console.log(`Target: ${target}, Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target}, Guess: ${guess}`);
console.log('Congrats you win!'); */
/* -------------------------------------------------------------------------------------------------------- */
