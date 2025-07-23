(
    function (){
        console.log("IIFE : Immediate invoking function expression");
        
    }
)()

let doLogic = function helloUser() {
    console.log("Variable storing then calling");
};

console.log("Without parenthesis call");
doLogic;                   // ✅ Not called, just referencing
console.log(doLogic);      // ✅ Outputs [Function: helloUser]

console.log("With parenthesis call");
doLogic();                 // ✅ Function is called and logs the message

// ❌ These will cause ReferenceError:
helloUser;
console.log(helloUser);
helloUser();  // ❌ Uncaught ReferenceError: helloUser is not defined



let doLogic1 = function helloUser() {
    console.log(typeof helloUser);  // ✅ 'function' (accessible internally)
};

console.log(typeof helloUser);  // ❌ ReferenceError: helloUser is not defined