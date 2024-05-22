/*HOF : Higher Order function
important topics:
1.Callback  ->callback hell(takes too much memory)(advanced JS)
2.Functional programming--> map , filter , reduce , for each ,
*/


/*HOF : Are function which takes other function as parameter or 
return a function as a value
important topics:
1.Callback  ->callback hell(advanced JS)
    Callback: The fn passed as parameter
// 2.Functional programming--> map , filter , reduce ,for each, find ,sum , sort , every


*/
// (I)////////////////////// may call as HOF /////
/*
const callback=(n)=>{
    return n**2
}

function cube(callback,n){ //we don't need to specify paranthesis or parameter in callback
    return callback(n)*2;
}
console.log(cube(callback,3));
*/

//(II)//////////////////////////////////////
/*
function greet(){
    console.log("HEllo")
}
setInterval(greet,1000)    // takes parameter function and time period
//(if i want to do something in a certain time interval)    1000 is 1 milli second  
// but this is not a proper way

*/


/*
//  ek baar execute hoga timeout wala
setTimeout(()=>{//here setinter.. fn taking two parameter 1.arroy fn 2.interval(time priod)
    console.log("hello")
},5000);


setInterval(()=>{//here setinter.. fn taking two parameter 1.arroy fn 2.interval(time priod)
    console.log("hello")
},1000);

*/

//(III) /////////////// Functional Programming
/*
1.map: 
    a.iterate an array element and modify array element ,
    b.it takes a callback fn with element index array
    c. and return a new array
*/

/*
const num=[1,2,3,4,5]
const square= num.map((num)=> num*num)  
console.log(square)  //[ 1, 4, 9, 16, 25 ]


const num=[1,2,3,4,5]
const square= num.map((n)=> num*num) //yaha n hai parameter of arroy fn Nan Nan Nan.. aayega
console.log(square)  //[ NaN, NaN, NaN, NaN, NaN ]
*/

// function addPrefix(prefix) {
//     return function(name) {
//       return `${prefix} ${name}`;
//     };
//   }
//   const addMr = addPrefix("Mr");
//   console.log(addMr("John"));



/*
2.Filter: A function 
    a.Filter out element which fullfill filtering condition 
    b.and return a new array
*/

// const country=["Finland","Ireland","SriLanka","England"];

// const land=country.filter((country)=>country.endsWith("land"))
// console.log(land)






/*  

 one the most important and common

3. Reduce:  
    a.it takes a callback function, 
    b.The callback fn takes accumulator ,current and optional initial value as parameter
    c. return a   SINGLE VALUE
*/


// const numb=[1,2,3,4,5]

// const value=numb.reduce((acc,curn)=>acc+curn);
// console.log(value)

// initializer=5
// const value2=numb.reduce((acc,curn)=>acc+curn,initializer,);
// // acc takes each value of array while taking initializer very first 
// console.log(value2)


/*
4.For each:
    a.iretate an array element we use for each only with array, 
    b.it takes a callback function with element index-parameter and array itself 
    c.index and array are optional

*/

// const num1=[1,2,3,4,5]
// num1.forEach((num)=>console.log(num))

// sum=0
// num1.forEach((num)=>{
//     sum+=num
// });
// console.log(sum)






/*
5.Sort: 
    a.Arrange the array element either ascending or descending order
    b.by default sort value as a string 
*/
// const arr=["random","Acc","Abhay","krish","Dinkar"]
// arr.sort()
// console.log(arr)


