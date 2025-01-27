// print sum of cubes of the items which are multiples of 5

arr = [3,4,5,10,43,15]

//filter map and foreach




let finalArr =arr
    .filter(ele => ele%5==0)
    .map(element => element*element*element)

// let sum = 0;
let fsum = finalArr.reduce((sum,item) => sum+item , 0);
console.log(fsum);

// reduceRight
let frsum = finalArr.reduce((sum,item) => sum+item , 0);
console.log(frsum);

arr.sort((a,b) => a-b);  // inplace sort  increasing
console.log(arr);

arr.sort((a,b) => b-a);  // inplace sort  increasing
console.log(arr);


console.log( 5*5*5 + 10*10*10 + 15*15*15);



//  object

let fan = {
    "brand" : "Something",
    "price" : 900,
    "no_of_blades" : 3,
}

console.log(fan);
console.log(fan.brand);
console.log(fan["brand"]);
// console.log(fan[brand]);
