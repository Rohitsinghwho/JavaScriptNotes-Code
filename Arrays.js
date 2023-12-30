// in javascript array can store any type of data in an array. arrays are a single varible in which we can store multiple values;
let MyArr= [1,2,3,4,5,false,'rohit']
// console.log(MyArr[0]) this is how we access the element

// console.log(MyArr.includes(false)) //does it have false as element or not?
let index = MyArr.indexOf('rohit') //it will give me the index of value
// console.log(index) 

// console.log('A ' + MyArr);
// console.log(MyArr.slice(1,3)); //slice will not change the orignal array and will return only in duplicate 
// console.log('B '+ MyArr);
// console.log(MyArr.splice(1,3)) //splice will change the orignal array 
// console.log('C '+ MyArr);
// Array.push(10)  pushelement in last
//Array.pop()//delete element from last
//Array.unshift(10)  add in first
//Array.shift() remove from begi

let another_array=[0,4,3,6,'negi'];
// MyArr.push(another_array) //it will push as another array so we can use concat
// console.log(MyArr)
// let real_another_array= MyArr.concat(another_array);//This method return a new array with all the element
// console.log(real_another_array)//

// Spread Operator-->> spread opertor spreads the elements just like when we drop a glass it is spread into glass pieces

let real_another_array= [...MyArr , ...another_array]  //... is called spread operator
// console.log(real_another_array)

let num1=100
let num2=200
let num3=300

let array= Array.of(num1,num2,num3);   //of operator created a new array from the set of elements
console.log(array)


let names="rohit"
let arrNames= Array.from(names,(x)=>x+x)    //It convert every character into an element of array
console.log(arrNames);
