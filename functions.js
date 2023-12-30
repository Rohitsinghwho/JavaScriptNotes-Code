
// functions  are a set of values that performs a specific task//
// for ex we want to write console log 5 time then we will write is five time but when we place it inside a func it will follow dry

// assigning a variable to a function
const myFunction= function(){
    console.log("helo");
}

// without variable and non parametarized 
function greetings(){
    console.log("Hello i am without varibale")
}

// reference of a function
// let myFunction = greetings;
// invoking a fuctions
// myFunction()

// parametarized function...parameters are name and age
function greeting(name,age){
    console.log(`My name is ${name} and i am ${age}`);
}
// now we need to pass the arguments and then invoke
// greeting("Rohit",22);
// you can also send multiple parameters at once by using an array or an object
//pass an object
const Myobj={
    name:"Rohit",
    age:22,
    email:"Rohit@google.com",
}
// if we change any value inside a function of an non primitive data type the orignal will also change
function PrintDetails(objs){
    console.log(`Name :${objs.name="Mohit"}, Age : ${objs.age}, Email : ${objs.email}`);
}
// PrintDetails(Myobj);
// if we want to pass the array then
const MyArray=[1,2,3,4,5]
function PrintArrayElement(arr){
    console.log(arr[1])
}
// PrintArrayElement(MyArray)

// just like spread operator we also have rest operator which works just like spread and also syntax is same ...
// the rest operator will store the element in array like structure and the return type will be an object
// rest operator can take multiple arguments in a single variable
function RestOperatorEx(...nums){
    return nums;
}
console.log( typeof RestOperatorEx(100,200,300,400));
