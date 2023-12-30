// objects in javascript are the collection of properties and properites are associated with key and value pairs


// genrally two ways of created objects
//1- using object constroctor which creats singleton object
// Object.create()

// 2- using object litrals which does not create singleton object

// created object using object litrals

let MySym= Symbol("key1")
let MyObj={
        name:"Rohit",
        [MySym]:"I am Rohit",   //symbol syntax 
        Email:"Rohii@google.com",
        Age:20,
}

// Ways of Accessing the object values
// using . opeator and using [] operator
// console.log(MyObj.name); // Rohit
// console.log(MyObj["Email"]) //Rohii@google.com // we are using " " because the keys inside the objects are defined as string 
// by default
// console.log(cMyObj[MySym])  //it will print the symbol inside the obj
// but we can acess it using bracket notation




//if we want that no one changes the objects value now the  we can freez the obj 
// Object.freeze(MyObj)
// MyObj.Email="rohitnegi@microsoft.com"


//we can add functions inside a object 
MyObj. greetings= function (){
    console.log("hello i am a func")
}

// console.log(MyObj.greetings())


// suppose we want to merge to objects then there are two ways to do that
// one is Object.assign() that returns a new obj
// second is spread operator
const newObj= {
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}

// first one assign()
// const obj3= Object.assign({},newObj,obj2);   //why {}? beacuse it acts as a target where the value will be stored it is optional
// console.log(obj3)

//second one spread
// const obj3 ={...newObj , ...obj2 };
// console.log(obj3)


// we can also add objects inside an object
const person={
    fullName:{
        username:{
            firstName:"Rohit",
            lastName:"Negi"
        }
    },
    age:25,
}
// suppose want to access lastName then
// console.log(person.fullName.username.lastName);

// suppose we want to know all the keys of an obj then
// console.log(Object.keys(person));  //it returns an array of keys
// suppose we want to know all the values of an obj then
// console.log(Object.values(person.fullName.username));// it returns an array of values


// suppose we want to knwo if the object has the property in it or not
// console.log(person.hasOwnProperty('age'))


// object destructuring
const obj1= {
    name : "rohit",
}
// const {name:firstName}= obj1; 
// console.log(firstName)


// Json Data
// json (javascript object Notation) is a standard text format used for representing struntured data based on js objects
// json is genrally used to share file in web i.e from server to client or viceversa
// {
//     "name":"rohit",
//     "email":"Rohii@google.com",
// }


