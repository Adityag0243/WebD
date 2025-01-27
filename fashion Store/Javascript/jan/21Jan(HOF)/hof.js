// for func to be as 

function f1(arg){
    console.log("first");
    
    console.log("function accepting another fn");
    setTimeout(()=>{          // but they are hard to debug that's why they are not used 
        arg();
    },3000);
    console.log("second");
    
}

function callback(){
    console.log("Callback...");
}

f1(callback);