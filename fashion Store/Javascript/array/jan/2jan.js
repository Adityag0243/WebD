// // let fan = {
// //     "brand" : "Something",
// //     "price" : 900,
// //     "no_of_blades" : 3,
// // }


// // let pen = {
// //     "brand" : "Reynold",
// //     "price" : 7
// // }

// // pen['len'] =  10;

// // console.log(pen['brand']);
// // console.log(pen['len']);
// // console.log(pen.len);

// // delete pen.len;

// // console.log(pen.len);

// // pen.len = 10;
// // console.log(pen.len);



// // let obj = {
// //     "brand" : "Something",
// //     "price" : 900,
// //     "no of blades" : 3,
// // }
// // // console.log(obj.no of blades);   // here . will not work as there is space/hyphen or start with numbers in the name of the key
// // console.log(obj["no of blades"]);  // but . is more optimized for java engine


// // let std = {
// //     marks : [15,18,17],
// //     hobbies : ['playing' , 'singing' , 'writing']
// // }

// // console.log(std.hobbies)

// // console.log(std.hobbies[0])


// // let student = {
// //     name : "Aditya",
// //     city :  {
// //         street : "st1",
// //         state :  "state 1",
// //         country : "c1"
// //     }
// // }

// // console.log(student.city)
// // console.log(student.city.street)
// // console.log(student.city.state)


// // let a={
// //     name : "Aditya",
// //     city :  {
// //         street : "st1",
// //         state :  "state 1",
// //         country : "c1"
// //     }
// // }

// // let b={
// //     name : "Rohit",
// //     city :  {
// //         street : "st2",
// //         state :  "state 2",
// //         country : "c2"
// //     }
// // }




// // l = [a,b];

// // console.log("Printing list of object: ")
// // for (let i = 0 ; i<l.length ; i++){
// //     console.log(l[i].name);
// //     console.log(l[i].city.state);
// // }


// // let c={
// //     name : "Parv",
// //     city :  {
// //         street : "st3",
// //         state :  "state 3",
// //         country : "c3"
// //     }
// // }

// // l.push(c)

// // console.log("Printing list of object Again: ")

// // for (let i = 0 ; i<l.length ; i++){
// //     console.log(l[i].name);
// //     console.log(l[i].city.state);
// // }


// let name = ['rose' , 'mp' , 'mt'];
// let height = [10,20,30];
// let color = ['r','g','b'];


// function fn(a,b,c){
//     let list = []
//     for (let i = 0; i<a.length ; i++){
//         let obj = {
//             name : a[i],
//             height : b[i],
//             color : c[i]
//         }
//         list.push(obj);
//     }
//     return list
// }
// let list = fn(name,height,color);

// console.log(list)
// console.log("Loop : ")

// let arr = [3,4,5]
// for(item in arr){
//     console.log(item *  item);  // outputting the square of the index
// }
// for(item of arr){
//     console.log(item * item);   // outputting the square of the array element
// }



// function hi(){
//     return 5;
// }

// let obj1 = {
//     "key1" : hi(),
//     "key2" : 10 
// } 
// console.log(obj1);

// obj1.key1 = 10;
// console.log(obj1);


let cars = [
    {n : "Alto" , c : "black"},
    {n : "Yamaha" , c : "white"}
]

for (let i = 0; i<cars.length ; i++){
    let car = cars[i];
    for ( k in car){   // k is holding the key as car is object if obj was list then k must be index
        console.log( k , " ", car[k]);
    }
}
