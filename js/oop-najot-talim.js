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

class Profession {
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
console.log(designer.getInfo);