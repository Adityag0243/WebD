// // dynamic size --> push
// // heterogeneous


// let a  = [1,2,"3","hello",'a',6,7];


// // console.log(a)  //(7)[ 1, 2, '3', 'hello', 'a',6,7 ]  ---> (7) -->length
// // console.log(a.length) 
// // console.log(a[a.length-2]) 


// // // looping over array

// // for(let i = 0; i<a.length ; i++)
// // {
// //     console.log(a[i])
// // }

// a.push("last_pushed_element")
// console.log(a[a.length-1])


// let b = []
// b.push("A" , "Ab" , 1,2)    // can push multiple element in one go....
// console.log(b)



// console.log(b.pop())

// console.log(b)

// b[0] = "changed val"
// console.log(b[0])

// console.log(b)


// let marks = []

// marks.push(35,35,42,32,48,50,29,43,42,38)

// let sum = 0

// for(let i = 0; i<marks.length ; i++){
//     sum += marks[i]
// }
// let avg = sum/marks.length

// console.log("Average marks: "+ avg)




// // minimum marks...... 
// let min_marks = marks[0]

// for(let i = 0 ; i<marks.length ; i++){
//     if(marks[i] < min_marks) min_marks = marks[i] 
// }
// console.log("minimum marks : " + min_marks)


//  delete and undefined

// let c = [0,1,2,3,4,5]
// delete c[2]
// console.log(c)     // it will create hole
// console.log(c[2]) // undefined
// c.shift()     // remove element from start
// console.log(c)
// c.unshift(50) // add item in begining
// c.unshift(60) // add item in begining
// console.log(c)


// c[2] = 11
// console.log(c)








//    toString Method

let a =[1,2,3,3,4,5]
console.log(a.toString())

let b = ["second array" , "third"]
let c = a.concat(b)                       // concat and then return it NOT concat in itsel
console.log(a)
console.log(b)
console.log(c)
a.push(3)

console.log(a)
console.log("first index of 3: "+a.indexOf(5))
console.log("last  index of 3: "+ a.lastIndexOf(6))



let str = a.join(' : ')   //    -->  :   separator can be anything here : between each element
console.log(str)



console.log(a.slice(2,6))

a.pop();
a.pop();
a.pop();



// a.forEach(ele => console.log(ele))
console.log(a)
a.forEach(ele => ele*=2)   // nothing happens in original array

console.log(a)
// for(let )
console.log("With map: ")
let another_array = a.map(ele => ele*=2)
console.log(a)
console.log(another_array)

console.log("Odd elements with filter:  ")
console.log( a.filter( item => item%2==1) );
let odd_arr = a.filter( item => item%2==1);


