let num= new Number(33.7392); //new way to define a number
// console.log(num.toLocaleString('en-IN')) //it will convert the string into locale string
// console.log(num.toFixed(1)) //it will give a fixed value till after decimal
// console.log(num.toPrecision(3)) //it will give value till precision

// ++++++++++++++++++Maths+++++++++++++++++++++++

// console.log(Math.max(3,4,5,2))
// console.log(Math.min(3,4,5,2))
let min=1;
let max=6;
let value= Math.floor(Math.random()*(max-min+1))+min;  //this is the formula for random
console.log(value)

