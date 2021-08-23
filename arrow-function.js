// function declaration 
function add (num1, num2){
    return num1 + num2;
}

// function expression
const add2 = function add2(num1 , num2){
return num1 + num2;
}

//  function expression anonymous
const add3 = function(num1,num2){
    return num1 + num2;
}

// arrow function 
const add4 = (num1, num2) => num1 + num2;


// document.getElementById('mybutton').onclick = function(){

// }
const sum1 = add(15,15);
const sum2 = add2(15,15);
const sum3 = add3(15,15);
const sum4 = add4(15,15);


console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);