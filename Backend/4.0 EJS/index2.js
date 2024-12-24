import express from "express"

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const port = 3000;
const app = express();

let day = new Date().getDay();

app.get("/" , (req,res)=>{
    if(day % 6 === 0){
        res.render( __dirname + "/view/index2.ejs",{
            daytype : " weekend ",
            advice  : "have a fun day",
        })
        
    }else{
        res.render( __dirname + "/view/index2.ejs",
            {
                daytype : " weekday",
                advice  : "work hard bro.. ",
            }
        )
    }
});




app.listen(port , ()=>{
    console.log("Listening ... ");
});





