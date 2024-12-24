import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const data = {
        title   : "EJS Tags",
        seconds :  new Date().getSeconds(),
        items   : ["Apple" , "Banana", " Papaya"],
        htmlContent : "<em> Some em tag content </em>",
    }
    res.render(__dirname + "/public/index.ejs",data);
});


app.listen(port , ()=>{
    console.log("Listening the port ");
})