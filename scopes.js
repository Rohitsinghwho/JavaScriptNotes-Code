// scopes are like{ }
// if(true){
//     let a=6;
//     const b=11;
//     var c=12;
// }

// console.log(a) //let's scope will be only inside the curly braces if written so it will through an error
// console.log(b) //const scope will also be insdie the braces it will also through an error
// console.log(c);//var is a keyword whose value can be overrided

function greetings(){
    let name="rohit";
    function getDetails(){
        let lastName="singh";
        console.log(`hello ${name}`)
    }
    getDetails()
    console.log(`hello my name is ${name} and last name is ${lastName}`);
}

greetings()