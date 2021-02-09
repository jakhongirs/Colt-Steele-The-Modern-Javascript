class Calc {
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
console.log(calc.subtract());