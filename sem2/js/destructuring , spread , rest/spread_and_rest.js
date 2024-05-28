// spread ---> expand
// rest --> collect


const num=[1,2,3,4,5]
// let ...num2=num;    //wrong

//let num2=...num    //wrong

let num2=[...num]
// this will work for three arguments
function summation1(){
    return arguments[0]+arguments[1]+arguments[2];
}
console.log(summation1(1,2,3,4));


// but it should work for dynammic input , BUT NOT WORKING
function summation(){
    let val=arguments.reduce((acc,curn)=> acc+curn);
    return val;
}
console.log(summation(1,2,3,4));


