// types of data types-- Data types are divided into two categories based on how the data will be stored in the memory
// first one is  primitive data type and second one is non primitive data type
// In primitive data types the value is changed in the copy variable for ex- when a num is declared as 7 and we pass
// it to a function then the value will be changed in a copy
// primitive type: String,num,boolean,null,undefined,symbol,bigInt
// Non primitive are also called as reference types because there is refernce means address is given to us
// non primitive type: Arrays, Objects, Functions



// Primitive data types
let name="Rohit" //string data type
let num=2 //number data type
let temp= null //null data type
let accountId= undefined //undefined data ype
let id= Symbol('123') //symbol data type
let bigNum= 2124123124124343; //big int data type
let isLoggedIN= false //boolean data type

// Non primitive or Referece types

const heros= ["Shaktiman","Sonpari","baalveer","Oggy"]  //Arrays data type

//Objects data type
const myObj= {
    FavoriteSuperHero:"IronMan",
    FavoriteSuperHeroien:"RinkuBhabhi",
    TotalMoney:30,
}
// function data type
function MeraFunction(){
    console.log("hello World!");
}

const EseKaro= function(){
    console.log("Ese bhi kr skte hai")
}

// console.log( EseKaro());

// Primitive (Stack)    Non-Primitive(Heap)

// Primitive data types are stored in stack and we are given copy of the value so when we change copy value it does not
// affect original value
// for example

let Name="Rohit";
let originalName=Name;
// console.log(`Original Value : ${originalName}`);
// console.log("after changing value")
// originalName="Rohit singh negi"
// console.log(`After Changing Value :${originalName}`);
// console.log(`After changing orignalName the value of name is ${Name}`)

// Summary is that after changing copy string orignal value did not change

// Non primitve data types are stored in heap memeory and we are given a reference of the value so when we copy the data
// type in another variable the variable gets created in stack but the referernce is given of the original value
// for example

let myObject= {
    email:"Shaktiman@google.com",
    ytChannel:"Bluntman",
}

console.log(myObject.email)
let copiedObj= myObject;
copiedObj.email="Rohitsingh234@gmail.com"
console.log(copiedObj.email) //copied varaible
console.log(myObject.email)  //original object

// summary is that after changing the value in the copied value the value of orignal object also changed --Non primitive for u
// Objects are reference types so if we assign an object to another variable then it will refer to same object in heap memory

