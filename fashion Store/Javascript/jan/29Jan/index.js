// const { error } = require("jquery");

let num = 1;
console.log("hi".toUpperCase());
function fn(numb){
    try{
        numb.toUpperCase();
    }catch{
        console.log("there is some error");
        
    }
}

fn(num);

const str = `{ "name" : Aditya"}` ;
const str1 = `{"age" : 5}`;
try {
    const obj1 = JSON.parse(str1);
    document.querySelector("#msg1").innerHTML = "1st one parsed wellll.......";
    const obj = JSON.parse(str);
    document.querySelector("#msg").innerHTML = "parsed wellll.......";
}
catch(err) {
  document.querySelector("#msg").innerHTML = err.message;
  document.getElementById("demo").innerHTML = err.name;
}