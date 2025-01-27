function db(x){
    return 2*x;
}

const dbArrow = (x) => {
    return 2*x
}

let x = 19;
console.log(dbArrow(x));

const fun = (resolve,reject)=>{
    isCarReady = false;
    if(isCarReady){
        resolve("Car is ready...")
    }else{
        reject("car isn't ready......")
    }
}

const promiseIwillVisitYou = new Promise(fun);


promiseIwillVisitYou
    .then( (message)=> {console.log(message + "I am coming for it")})
    .catch((message)=> {console.log(message)})
    .finally(()=>{console.log(".finally always print")})

    


