

const task3 = (resolve,reject)=>{
    reqComp = true;
    if(reqComp){
        resolve("Task3");
        
    }else{
        reject("Task 1 not completed");
    }

}
const task2 = (resolve,reject)=>{
    reqComp = true;
    if(reqComp){
        resolve("Task2"+ task3());
        
    }else{
        reject("Task 1 not completed");
    }

}
const task1 = (resolve,reject)=>{
    reqComp = true;
    if(reqComp){
        resolve("Task1");
        task2();
    }else{
        reject("Task 1 not completed");
    }

}

const synchronous  = new Promise(task1);

synchronous
    .then((message)=> console.log(message))
    .catch((message)=> console.log(message))
    .finally(()=>{console.log("All done")})