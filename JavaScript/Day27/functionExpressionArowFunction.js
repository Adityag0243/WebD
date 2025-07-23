// const fnExpr = function () {
//     console.log(arguments); // ✅ works
// };

// fnExpr();
// const arrowFn = () => {
//     console.log(arguments); // ❌ ReferenceError
// };
// arrowFn();


const obj = {
    name: "JS",
    funcExpr: function () {
        console.log(this.name); // ✅ "JS"
    },
    arrowFunc: () => {
        console.log(this.name); // ❌ undefined (or global object)
    }
};
console.log(obj.name);
console.log("__________________________________");

console.log(obj.funcExpr);
obj.funcExpr();
console.log("__________________________________");
console.log(obj.arrowFunc);
obj.arrowFunc();





