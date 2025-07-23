let now = new Date();
console.log(now);
console.log("================================")
console.log(now.toString());
console.log("================================")
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log("================================")

let d1 = new Date("2025-02-30");
console.log(d1.getDate());  // get back to 2 feb
console.log(d1.getMonth());   


// 2024 is leap year with 29 days for 30 it get back to 1st feb...
let d2 = new Date("2024-02-30");
console.log(d2.getDate());
console.log(d2.getMonth());

console.log("=======================");
d1.setDate(25)
d1.setMonth(2)
console.log(d1.toLocaleDateString())

