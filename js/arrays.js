/* -------------------------------------------------------------------------------------------------------- */
/* Creating Arrays: */

/* Creating an empty array: */
let students = [];

/* An array of strings: */
let colors = ['red', 'yellow', 'blue', 'green'];

/* An array of numbers: */
let numbers = [6, 19, 31, 28, 23];

/* A mixed array: */
let mixed = [true, 68, 'cat', null];

/* Boshqa tillarda arrayni mix qilib bo'lmas ekan, aynan bir xil data type bo'lishi kerak ekan. Lekin JS da mumkin */
/* -------------------------------------------------------------------------------------------------------- */
/* Array Indices: */

/* Arrays are indexed: */
let ranglar = ['yellow', 'blue', 'red', 'orange'];

ranglar.length //4

ranglar[0]; //yellow
ranglar[1]; // blue
ranglar[2]; //red
ranglar[3]; //orange
/* -------------------------------------------------------------------------------------------------------- */
/* Modifying Arrays */

/* Arrays are mutable! We can change them whenever we want! */ 
/* Array ichidagi bir itemni o'zgartirish: */
let shoppingList = ['cheese', 'milk'];
shoppingList[1] = 'chocolate';
/* -------------------------------------------------------------------------------------------------------- */
/* Array Methods: */
/* Arrayga element qo'shish va o'chirish: */

/* Push - Add to end
Pop - Remove from end
Shift - Remove from start
Unshift - Add to start */

let movies = ['Mr.Bean', 'Walter Mitty', 'Shumbola', 'La la land'];
movies.push('Avengers'); /* Oxiriga element qo'shish */

movies.pop(); /* Oxirgi elementni o'chirib tashlaydi */
/* -------------------------------------------------------------------------------------------------------- */
/* Concat: */

/* Concat - Arraylarni birlashtirib yangi array qilib beradi. */

let fruits = ['apple', 'banana', 'orange'];
let veggies = ['brocolli', 'cucumber'];
let meats = ['steak', 'chicken'];

let allFood = fruits.concat(veggies, meats);
/* -------------------------------------------------------------------------------------------------------- */
/* Includes */

/* Qiymat oladi va uni arrayni ichida bormi yo'qligini tekshirib true yoki false qaytaradi: */

let bozorlik = [
  'kartoshka',
  'sabzi',
  'piyoz',
  'bodiring',
  'pomidor',
];

if(bozorlik.includes('sabzi')){
  console.log('Brat sabzi bor ekan')
} 

else{
  console.log("brat yo'q ekan oling")
};
/* -------------------------------------------------------------------------------------------------------- */
/* IndexOf */

/* Qiymat oladi va uni arraylar ichidan qidirib nechinchi o'rinda turganligini aytadi, agar u elementni topa olmasa -1 qaytaradi */
bozorlik.indexOf('bodiring');
/* -------------------------------------------------------------------------------------------------------- */
/* Reverse and Join */

let letters = ['A', 'B', 'C', 'D'];

letters.reverse();
console.log(letters);
/* -------------------------------------------------------------------------------------------------------- */
/* Join - bu bizga arrayni stringa aylantirib beradi: */

let ovqatlar = ['Osh', 'Shurva', 'Manti', 'Somsa'];

let ovqat = ovqatlar.join(' ');
console.log(ovqat);
/* -------------------------------------------------------------------------------------------------------- */


