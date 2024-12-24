import express from "express";
import bodyParser from "body-Parser";


import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let bandname = "";



app.get("/" , (req,res)=>{
  res.sendFile( __dirname + "\\public\\index.html");
})


app.use(bodyParser.urlencoded({extended : true}));

function bandNameGenerator(req,res,next)
{ 
  bandname = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);


app.post("/submit" , (req,res)=>{
  res.send(`<h1>Your Band name is: </h1> <h2> ${bandname} ✌️ </h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
