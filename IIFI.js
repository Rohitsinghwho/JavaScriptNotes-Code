// IMMEDIETLY INVOKED FUNCTION AND EXPRESSIONS
// IIFI are a function that is exected the moment it is defined IIFI are ofen used to create private vaiable and to avoid 
// polluting the global scope
// To write IIFI we wrap the function insdie () and then we again do a () to execute the function and pass arguments and end
// with a semicolon
// named IIFI
(function chai(name){
    console.log(`hello i am ${name} IIFI`);
})("rohti");

// un named IIFI AND ARROW FUNC
 (()=>{
    console.log("I AM UNNAMED IIFI")
 })();
