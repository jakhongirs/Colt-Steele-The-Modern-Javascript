/* class Calc {
  x
  y

  constructor(x, y){
    this.x = x
    this.y = y
  }

  add(){
    return this.x + this.y
  }

  subtract(){
    return this.x - this.y
  }
}

const calc = new Calc(20, 10)

console.log(calc.add());
console.log(calc.subtract()); */

/* -------------------------------------------------------------------------------------------------------- */

/* class Profession {
  name
  #salary
  job


  constructor(name, salary, job){
    this.name = name
    this.#salary = salary
    this.job = job
  }

  get getInfo() {
    return `${this.name + ' ' +  this.#salary + ' ' + this.job}`
  }

}

const developer = new Profession('Jakhongir', 500, 'developer')
const doctor = new Profession('Husayn', 1500, 'doctor')
const designer = new Profession('Bahodir', 800, 'designer')

console.log(developer.getInfo);
console.log(doctor.getInfo);
console.log(designer.getInfo); */

/* -------------------------------------------------------------------------------------------------------- */
/* Inheretence OOP */

/* Bu ota class */
/* class Human {
  name
  age

  constructor(name, age){
    this.name = name
    this.age = age
  }
} */

/* child class otasidan bir xil narsalarni copy qilib */
/* class Profession extends Human{
  job
  experience

  constructor(name, age, job, experience){
    super(name, age)

    this.job = job
    this.experience = experience
  }
}


let teacher = new Profession('Alisher', 20, 'teacher', 15)
let designer = new Profession('Bahodir', 16, 'designer', 1)

console.log(teacher) */
/* -------------------------------------------------------------------------------------------------------- */

/* class RGB {
  R
  G
  B

  constructor(Red, Green, Blue){
    this.R = Red <= 255 && Red > 0 ? Red : 0
    this.G = Green <= 255 && Green > 0 ? Green : 0
    this.B = Blue <= 255 && Blue > 0 ? Blue : 0
  }

  get red(){
    return this.R
  }

  get green(){
    return this.G
  }

  get blue(){
    return this.B
  }

  set red(newColor){
    if(newColor < 255 && newColor > 0){
      this.R = newColor
    } else{
      this.R
    }
  }

  set green(newColor){
    this.G = newColor < 255 && newColor > 0 ? newColor : this.G
  }

  set blue(newColor){
    this.B = newColor < 255 && newColor > 0 ? newColor : this.B
  }

}

let color = new RGB(125, 200, 255)

console.log(color); */