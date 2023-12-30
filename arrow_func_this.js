// This key word is used to refer current context of a scope

let myobj={
    name:"Rohit",
    Age:10,

    welComeMSg:function getdetails(){
        console.log(`Name : ${this.name} ,Age :${this.Age}`)
    },
}

// myobj.welComeMSg()
// myobj.name="hitsh"
// myobj.welComeMSg()

function chai(){
    let username="Rohit"
    console.log(this.username);
}
// chai() we cannot accesses elements inside a function using this
// console.log(this )//this return an  global window object


// ++++++++++++++++++++++++++++ARROW FUNC++++++++++++++++++++++++++++++++
// instead of function key word we write name of function and then = and ()=>
greetings=()=>{
    console.log("I am an arrow function")
}
// greetings()
// arrow function can also be assigned to a variable
// let Arrow= ()=>{
//     console.log("rohit");
// }
// Arrow()

// explicit return in arrow function
// let Arrow= (num1,num2)=>{
//     return num1+num2;
// }
// console.log(Arrow(2,3))
// implicit return in arrow function
// first 
// let Arrow= (num1,num2)=>num1+num2;
// console.log(Arrow(2,3))
//second
// let Arrow= (num1,num2)=> (num1+num2);
// console.log(Arrow(2,3))
// if we use () in return statment then we don't need to write return keyword

// if we want to return an object then?
let objArrow=(x,y) => ({sum: x+y});
// console.log(objArrow(5,7));

