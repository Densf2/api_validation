let num = 11

//while (num <= 7) {
   // console.log(num)
   // num++
//}


//do white
//do {
//num++
//console.log(num)
//} while (num <= 7)

let sumOfLoop = 0;

// for (let i = 0; i < 7; i++) {
//     console.log(i)
// }

for (let i = 0; i <= num; i+=2) {
console.log(i)
if (i == 6) break;
sumOfLoop += i
}

console.log(sumOfLoop)

f