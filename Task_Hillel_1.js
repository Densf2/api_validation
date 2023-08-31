// зробити змінну з значенням "We are good"

let OurValue = "We are good"
console.log(OurValue)


// створити 2 зміні зі значеннями ''Hello" і "World", створити команду для виведення в консоль цих слів разом

let OurValue1 = "Hello"
let OurValue2 = "World"
let OurValue3 = `${OurValue1} ${OurValue2}`
console.log(OurValue3)


//чи вірно оголошена перевірка типу даних - і якщо ні - то змінити на вірний варіант
//let myVariable = 'value'
//typeof{'myVariable'}

//Відповідь Ні
//Правильна відповідь

let myVariable = 'value'
typeof 'myVariable'
console.log( typeof 'myVariable' )


//чи вірно оголошений код для отримання значення іншої змінної
//( `hello ${"name"}` )
//Відповідь НІ
//Правильна відповідь
let name = "Igor"
let OurValue5 = (`hello ${name}`)
console.log(OurValue5)

