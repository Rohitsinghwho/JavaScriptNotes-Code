// date and time are the objects in the javascript

let d= new Date();
console.log(d);  // it will show current system's date and time
console.log(d.toString());
console.log(d.toLocaleString('default',{
    weekday:'long', month: 'long', day:'numeric', year:'2-digit', hour12:false, hour:'numeric'
}))
// console.log(d.toLocaleTimeString())