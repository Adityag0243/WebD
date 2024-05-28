/*                    -->    WHY WE NEED SPREAD (...VARIABLE)      <--
when we will fetch multiple data(don't know how many data exactly came and how may ariable need to declare) 
from api we use spread and rest
*/


/*                          -->    DESTRUCTURING    <--
    a.Destructuring is a way to unpack array and object  assign to a distinct value(variable), 
    b.If we like to skip on the value in array we use additional comma 
    the comma help to omit the value at specific index

*/



/*
const names =["abhay","aditya","abhi","aadhaar"]
let [name1,name2,name3,name4]=names;
let[namex,namey,,namez]=names;    //skipping 3rd array

console.log(name1,name2,name3,name4)     //destructuring
console.log(namex,namey,namez)

const arr2d=[["abhay","aditya"],["abhi","aadhaar"]]
let [name5,name6]=arr2d;
console.log(name5,name6)    // 2d to 1d destructuring

console.log(arr2d)

let name8=[];
for(let i=0;i<names.length;i++){
    if(i==2){
        name8[2]=",";
        continue;
    }
    name8[i]=names[i];
}
console.log(name8)


*/



//     OBJECT DESTRUCTURING
// let objt={
//     width: 20,
//     height:30,
//     area:600,
// };


// let {w1,h1,ar1}=obj
// console.log(w1,h1,ar1)   // ye wrong hai why?? 
/*
when we destructure the name of a variable we use to destructure ,key or property should be the same
key aur variable same hone chahiye
*/
// let{width,height,area}=objt
// console.log(width,height,area)




/*   
(...args)   => spread or rest
harsh(...arghs)  =>  rest or spread

when we are using while receiving data   called --> 
*/

// const numb=[1,2,3,4,5,6,7]
// let [num1,num2,...args]=numb     // jo bachega sab catch kr lega do ke baad 
// // let [num1,num2,...args,num3]=numb                //wrong num3 ko kuchh milega nhi
// console.log(num1,num2,args)

// Que 1. 

// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

/*
1.Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
3.Destructure the rectangle object by its properties or keys.
*/

//1.Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp,and waterBoilingTemp.

const constants= [2.72, 3.14, 9.81, 37, 100]
let[pi,gravity, humanBodyTemp, waterBoilingTemp]=constants
console.log(pi,gravity, humanBodyTemp, waterBoilingTemp)


//2.Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let[fin, est, sw, den, nor]=countries
console.log(fin, est, sw, den, nor)

//3.Destructure the rectangle object by its properties or keys.

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};

let{width,height,area,perimeter}=rectangle
console.log(width,height,area,perimeter)


