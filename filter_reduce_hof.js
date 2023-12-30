const BookDetails=[
    {
        title:"Book One", Genre:"Non-fiction", Publish_Data:"1992",edition:"2004",
    },
    {
        title:"Book Two", Genre:"fiction", Publish_Data:"1942",edition:"2010",
    },
    {
        title:"Book Three", Genre:"History", Publish_Data:"2002",edition:"2023",
    },
    {
        title:"Book Four", Genre:"fiction", Publish_Data:"1995",edition:"2009",
    },
    {
        title:"Book Five", Genre:"Mathametics", Publish_Data:"2000",edition:"2020",
    },
    {
        title:"Book Six", Genre:"History", Publish_Data:"2005",edition:"2016",
    },
    {
        title:"Book Six", Genre:"Grammer", Publish_Data:"1996",edition:"2019",
    },
    {
        title:"Book Seven", Genre:"Non-fiction", Publish_Data:"1999",edition:"2010",
    },
]

// filter method filters the details through a callback and store it in the array
let BooksArray= BookDetails.filter((item)=>(item.Genre==="Non-fiction"&&item.Publish_Data>1992));
// console.log(BooksArray)

// another_Way
// let books= (item)=>{
//     return item.Genre==="Non-fiction"
// }
// let BooksArray= BookDetails.filter(books);
// console.log(BooksArray)

// let arr=[1,2,3,4,5]
// // filter will only check the conditon not do any operator and it will only return truthy values;
// let another_arr= arr.filter((num)=>{return num+num});
// console.log(another_arr)


// map method is used to iterate the array and do operation and it can return what ever we want 
let arr=[1,2,3,4,5]
// /./ let another_arr= arr.map((num)=>{return num^num});
// console.log(another_arr)


// method chaining 
let another_arr= arr.map((num)=>num+5).filter((num)=>num>8);  //ouptput is [9,10]
// console.log(another_arr)


//reduce function is used to done sum up the values from 0;

let obj=[
    {
        item:"Js course",
        priece:1999,
    },
    {
        item:"DSA course",
        priece:10000,
    },
    {
        item:"py course",
        priece:999,
    },
    {
        item:"swift course",
        priece:6999,
    },
]

// console.log(obj.reduce((acc,item)=>acc+item.priece,0))