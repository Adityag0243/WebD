
// Given an array of integers, modify each number by adding 5. Calculate and return the sum of all
// numbers that are multiples of 3 after the modification.


function fn(a){
    let sum = a
    .map(ele => ele+5)
    .filter(ele => ele%3===0)
    .reduce((acc,num) => acc+num , 0)
    return sum;
}


let a = [1,2,3,4,5];
console.log(fn(a));
let b = [1, -3, 9, 14, -10];
console.log(fn(b));



const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
];


students.push({name:"David" , age:21});

for (const element of students) {
    console.log(element)
}





// 2) Create an object for bus, in that you need to store the company name of the bus, color of bus, number of seats, engine type (diesel/petrol), oil tank capacity, 2 methods which print on console, the first method will be named as “start” it will print (The bus starts after we insert the key and rotate the key 90 degree left), the second method will be named as “stop” it will print (The bus engine stops when we press the red button near the speedometer).
// Finally call/access the start and stop method to see the result.


let bus ={
    name: "Somebus",
    color : "red",
    no_of_seat : 18,
    engine_type : "petrol",
    oil_tank_cap : 1000,
}


function start
