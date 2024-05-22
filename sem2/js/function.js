//  arrow function important hai dekhana hai usko
// ///////   ARGUMENT   by default each functions store argument in array like object    

// Arrow(=>) function must have returned value so that no duplicasy come out whenever we call it;

// function--- 1. No Argument  2. Having Armugent
// Having Argument ---> 1.Known Number of Argument 2.Unknown Number of Argument




/*
function ioi(nam1 , nam2){
    return nam1+nam2
}
console.log(ioi("PW","IOI"))
console.log(ioi("PW","IOI"," IS"))
console.log(ioi("PW"))
*/

// function alpha(num){
//     if(num<97 || num>132){
//         console.log("Ascii not found");
//         return -1;

//     }else{
        
//         return String.fromCharCode(num)
//     }
// }

// console.table([alpha(104),alpha(100),alpha(120),String.fromCharCode(110)])




// ///////   ARGUMENT   by default each functions store argument in array like object

// function func1(a,b,c) {
//     console.log(arguments[0]);// which means it can take infinite argument bhale upar 3 liye
//                               //  par hold to usse jyaad bhi kr leta hai
//     // Expected output: 1
  
//     console.log(arguments[1]);
//     // Expected output: 2
  
//     console.log(arguments[2]);
//     // Expected output: 3
//   }


//   function func2() {
//     console.log(arguments[0]);// which means it can take infinite argument bhale upar 3 liye
//                               //  par hold to usse jyaad bhi kr leta hai
//     // Expected output: 1
//     console.log(arguments[1]);
//     // Expected output: 2
//     console.log(arguments[2]);
//     // Expected output: 3
//   }
  
//   func1([1,2,3,4], 2, 3);
//   func2([1,2,3,4], 2, 3);   // function 2 doesn't have any parameter
  


// function sum(arr){
//     sum=0  // function and variable name is same but no error
//     for(let i=1;i<5;i++){
//         arr[i]+=arr[i-1]
//     }
//     return arr
// }


// arr=[1,2,3,4,5]
// let tarr=sum([1,2,3,4,5])
// console.log(arr)
// console.log(tarr)




// anonymous , self invoking(iife) ,



// function sum(a,b,c){  // arguments--> array
//     return arguments[0]+arguments[1]+arguments[2]
    
// }
// console.log(sum(4,5))


/* these all are first class function
2.HOF
3.FunctionaL PRogramming
*/




