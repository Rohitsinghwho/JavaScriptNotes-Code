var accountId= 234533
let name="Rohit"
const clg="Graphic era hill university";
email=null
let num1= Symbol(undefined);
// return type
// null -> Object
// undefined->undefined
// num->num
// String->String
// Boolean->Boolean
// Nan->num
// symbol->symbol
// A symbol cannot be converted into number but it can be conveted into string
// when a string of alphabets is converted into a number it is coverted INTO NAN(not a number)
// when a null is converted into integers to it is coverted into 0 and type becomes number
// when undefined is converted into integers it is converted into NAN and type becomes number
// when undefined is converted into string it is still undefined and type is string
// when undefined is converted into boolean it retuns false
// when null is converted into boolean it retuns false
// emepty string conversion with boolean also return false ans full string returns true
let num= "sdvsd"
console.log(typeof num);
console.log(Boolean(num));
console.log(typeof Boolean(num))
