// for in loop will return keys as in index by defualt
let arr=[1,2,3,4,5]
let obj={
    name:"Rohit",
    email:"rohit@gmail.com",
    age:20
}
// objects cannot be iterated using for of
// for (const key of obj) {
//     console.log(key)
// }

// // for in
// for (const keys in obj) {
//      console.log(Object.keys(obj))
// }

// for each loop -->for each loop expects a callfunc and that callback has access to the index ,item and whole array
// arr.forEach((num,index,arr)=>(console.log(`${num} , ${index} `,arr)))


let nodeList=[
    {
        title:"Rohit",
    },

    {
        title:"jagmohan"
    },
    {
        title:"shaktimaan"
    }
]

console.log(nodeList.filter((num)=>num.title.length>5));