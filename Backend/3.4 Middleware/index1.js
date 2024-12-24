// import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "\public\index.html");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

import express  from "express";

// to get the whole path upon till the folder where we are working
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
  res.sendFile( __dirname + "\\public\\index.html");
});

app.listen(port , ()=>{
  console.log(`Listening on port ${port}`);
})