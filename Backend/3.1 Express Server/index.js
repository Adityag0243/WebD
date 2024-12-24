import express from "express";
const app = express();
const port = 3000;

app.get("/" , (req,res) =>{
    res.send("Ram Ram bhai.. "); 
})

app.listen(port, () => {
    console.log(`Server running on the  ${port}.`);
})