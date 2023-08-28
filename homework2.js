//1
let x = 5
let y = 5

x *= y //equivalent to x = x * y

console.log(x) //25

//2
let variable = 'let1'

//3
variable = variable.toUpperCase()
console.log(variable)

//4
let newVariable = "some words containing let1"
let replacedValue = newVariable.replace("let1", "BANG")

console.log(replacedValue)

//5
let x = 5;
let y = 10;

if (x !== y) {
  console.log(true); //true
} else {
  console.log(false);
}

//6
let sum = 0
let number1 = 5
let number2 = 10

sum += number1 + number2

console.log(sum) //15

//7
let isFalse = (1 == 2)

console.log(isFalse) //false