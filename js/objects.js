/* 6) Objects - The Core Of JavaScript */

/* -------------------------------------------------------------------------------------------------------- */
/* * Intro to Objects: */

/* - Objects are collectons of properties.
- Properties are a key value pair
- Rather than accessing data using an index, we use custom keys. */
/* -------------------------------------------------------------------------------------------------------- */
/* * Creating Object Literals: */

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgColoriesBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};

fitBitData.avgColoriesBurn;

/* Objectda hamma keylar string bo'lib convert bo'ladi!
All keys are converted to strings! Except Symbols. */
/* -------------------------------------------------------------------------------------------------------- */
/* * Accessing Object Properties: */

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

/* Accessing datani usullari: */
/* 1) */ palette.red
/* 2) */ palette['blue']
/* 3) */ let color = 'yellow';
         palette[color];

/* Agar bizda . nuqta bilan  tanlash imkoni bo'lsa shu bilan tanlaganimiz yaxshi, lekin agar bizda
Invalid Key Name bo'lsa [] bilan tanlaganimiz yaxshi. Masalan: */

const person = {
  name: 'Jakhongir',
  surname: 'Sagdullaev',
  /* 31December: 'Birth of date' */ // shu joyida invalid key name lekin biz uni tanlasak buladi.
};

person['31December']; /* Xuddi shu usulda, bu yerda bizga hammasi string bo'lib qaytyabdi shuning uchun biz tanlay olamiz */

/* -------------------------------------------------------------------------------------------------------- */
/* Adding and Updating properties: */
const student = {
  name: 'Jakhongir',
  surname: 'Sagdullaev',
  birth: '31 December',
  level: 4
}

// Adding a new property:
student.id = 00009319; /* || student['id'] = 00009319; */

// Updating properties:
student.birth = '31/12/98'; /* || student['birth'] = '31/12/98'; */
/* -------------------------------------------------------------------------------------------------------- */
//Nested Arrays and Objects:

/* Biz objectlarni ham xuddi arraylarni nested qilgandek qilsak bo'ladi, object keylaridan : keyin array yoki object yozamiz */

const anotherStudent = {
  name: 'John',
  surname: 'Doe',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 49,
    final: 42
  }
};

const avg = Math.ceil((anotherStudent.exams.midterm + anotherStudent.exams.final) / 2);


/* Mashhur nested array va objects: */
/* Array ichida objectlar: */
const shoppingCart = [
  {
    product: 'Snickers',
    price: 4800,
    quantity: 1
  },

  {
    product: 'Kitkat',
    price: 5000,
    quantity: 2
  },

  {
    product: 'Bounty',
    price: 5200,
    quantity: 1
  }
];
/* -------------------------------------------------------------------------------------------------------- */

/* Reference type degan narsa ham bor
Bu degani we cannot easily compare values in arrays. */



const max = (...numbers) => {
  let maxNumber = numbers[0]

  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] > maxNumber) maxNumber = numbers[i]
  }

  return maxNumber;
}
console.log(max(1, 2, 4, 10));