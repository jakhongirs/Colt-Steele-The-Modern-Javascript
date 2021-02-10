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
  let student = students[i]

  /* console.log(`${student.name} scored: ${student.mark}`); */

  totalMarks += student.mark;

  var averageMark = totalMarks / students.length;
}

console.log(averageMark);
/* -------------------------------------------------------------------------------------------------------- */

