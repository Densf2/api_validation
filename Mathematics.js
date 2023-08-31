// let num1 = 3
// let num2 = 5

// let resN = `${num1 + num2}`

// let operPercent = 5%2

// let operModul = 2 ** 5
// console.log(operModul)
// let x = 5
// ++x
// console.log(x)

//comparison operations

let x = 5
let x2 = 'I like to play basketl NOT'

// console.log(typeof x)
// //x2 = Number(x2)
// console.log (typeof x2)
// let resComparison = x !== x2
// console.log(resComparison)

// let myComp = 33 <= 100

let t1 = true
let t2 = false
let logicOperAnd = (x > 1 && x < 6)

//console.log(logicOperAnd)

let logicOperOr = (x == 5 || x >=100)
console.log(logicOperOr)

//(x&&y || x>=100 && x==100)

let logicOperNot = !(x == 5)
console.log(logicOperNot)


//String operations
//let lX2 = x2.length
let partX2 = x2.slice(-15, 23)
console.log(partX2)

let partX3 = x2.substring(15, 22)
console.log(partX3)

console.log(x2)
let n = 'not'
x2 = x2.replace(n, '@YES@') // not change the string
n = n.toUpperCase()
x2 = x2.replace(n, '@YES@') // yeah. this will work
console.log(x2)

n = n.toLowerCase() //n.toLocaleLowerCase
//let txtConcat = partX3.concat(n)
let txtConcat = partX3.concat(' ', n)
console.log(txtConcat)


let txtWithTrash = '               original text     '
console.log(txtWithTrash.trim())

console.log(Number.isInteger(x))

