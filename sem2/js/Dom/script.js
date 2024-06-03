// const var1=document.getElementsByTagName("h1"); //class and id both
// console.log(var1)

// const var1 = document.getElementsByID("first-id");
// console.log(var2);


// // // var

// var2.outerText="Namaste";

// const var3=document.querySelector("#third-id");
// var3.outerHTML="okkkkkkkkkkkk";

const target=document.querySelectorAll("h1");
console.log(target)
target[3].className="fourth-h1";
target[3].id="fourth-id";

target[3].setAttribute("class" , "fourth-hi2");

target[3].textContent="text inserted by text content";

target[2].innerHTML="not correct way to insert content";    
// innerHTML se pura pura html element ke sath insert kr skyte hai

target[2].innerHTML= "<p>not correct way to insert content</p>" ;



