
function fnPlay(){
    console.log("let's go for playiing   ");
}
function fnTv(){
    console.log("Watching TV ");
}


const fn = (resolve,reject)=>{
    weatherCondition = true;
    if(weatherCondition)
    {
        resolve("Weather codition is good");
        fnPlay();
    }else{
        reject("Weather condition is not so good");
    }
}

const promises = new Promise(fn);
console.log(promises
    .then((message)=>console.log(message)
    )
);
