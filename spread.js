const numbers = [20,30,140,50,60,10,40]
/* Spread operator
...numbers
*/


// console.log(numbers);
// console.log(...numbers);
const max =Math.max(20,20,40,50,60,40,70) //array max    
const maxInArray = Math.max(...numbers);

// console.log(max,maxInArray);

// const number2 = numbers;
// numbers.push(49);
// console.log(number2);


const number3 = [...numbers,89]; // copy arrays
numbers.push(49);
console.log(number3);