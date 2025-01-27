
const fn = (success,fails)=>{
    reqComp = true;
    if(reqComp){
        success("your order will be delivered by Saturday");
    }else{
        fails("Not delivered yet, Delay in the order");
    }

}

const shopping  = new Promise(fn);

shopping
    .then((message)=> console.log(message))
    .catch((message)=> console.log(message))
    .finally(()=>{console.log("thanks for shopping with us")})