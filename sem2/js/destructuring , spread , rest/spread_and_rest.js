// spread ---> expand
// rest --> collect


const num=[1,2,3,4,5]


let num2=[...num]
// this will work for three arguments
function summation1(){
    return arguments[0]+arguments[1]+arguments[2];
}
console.log(summation1(1,2,3,4));



function summation(){
    let arr=Object.values(arguments); //as arguments is an object it must be converted in array
    let val=arr.reduce((acc,curn)=> acc+curn);
    return val;
}
console.log(summation(1,2,3,4,7,3));


function summation2(...ars){
    return ars.reduce((acc,curn)=> acc+curn)
}
console.log(summation2(1,2,3,4,5,6,7))





function multisum(num1,num2,...args){
    let arr=[];
    arr[0]=num1*num2;
    arr[1]=args.reduce((acc,curn)=> acc+curn,0)
    // return num1*num2+args.reduce((acc,curn)=> acc+curn,0)
    return arr
}
console.log(multisum(2,3,1,2,3,4,5))






