
// function parseJSON(inputString){
//     try{
//         const plantObject = JSON.parse(inputString)
//         return plantObject
//     }
//     catch(error){
//         console.log("There is an issue");
//     }
// }


// let jsonString = `{"name" : "Jasmin","height": 50}`;
// let plantobj = parseJSON(jsonString);
// console.log(plantobj);



function divideWithErrorHandling(a,b){
    try{
        if(b===0)
            throw new Error("can't divide by zero");
        console.log(a/b);
    }
    catch(error){
        console.log(error.message);
    }
}

divideWithErrorHandling(4,0)
divideWithErrorHandling(4,2)
