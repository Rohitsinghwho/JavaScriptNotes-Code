// String interpolation
// string interpolation means when we write a string in backticks and we inject the js code within that string via a ${} it is 
// called string interpolation
// Stirng interpolation is also a way to concat string with one another without using + operator

// for ex
// let name="rohit"
// let anotherName= "Singh";
// console.log(name+" "+anotherName);

//string interpolation---
// let name="Shaktiman"
// let anotherName="Chandramohan"
// let age=90
// console.log(`My name is ${name} ${anotherName} and i am ${age}`)
// String methods--A new Way to define string

let MyString= new String("Rohit-Singh-Negi");
let NewString =new String("rohit-siNgh-negId");
console.log(MyString.charAt(5));   //it follows 0 based indexing
console.log(MyString.charCodeAt(0));  //it will return me the ascii code of the character
console.log(MyString.endsWith('Singh')); //it will return if the string is ending with this char or not?
console.log(MyString.includes("hi")); //it will check whether it includes char or not
console.log(MyString.indexOf('i')) //it will return index of 'i' on 0 based indexing
console.log(MyString.localeCompare(NewString)); //it will campare the string irespective of the case or accents and it can return any negative value on false
console.log(MyString.repeat(3)); //it will repeat the string 3 times
console.log(MyString.replace('Rohit-Singh-Negi','e')); //it replaces all 'i' with 'e' in the string but it will not replace all h after spaces
console.log(MyString.replaceAll('Rohit-Singh-Negi','e'))//it will replacce all i with e 
console.log(MyString.slice(0,8)) //it gives us an another stirng with starting and ending -1 index
console.log(MyString.split('-',2))//it will sperate on the bases of first parameteer and will separte till limit is not reached
console.log(MyString.trim()) //trime removes all the extra space around the text
console.log(MyString.toUpperCase()); //convert to uppercase
console.log(MyString.toLowerCase()); //convert to lowercase
console.log(MyString.substring(0,5)) //it will give me a substring from 0 to 4
console.log(MyString.valueOf())//it will give the value of the string
