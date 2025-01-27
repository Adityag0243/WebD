import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render( __dirname + "/views/index.ejs" ,
    {htmlContent : "Enter Your Name"}
  );
});

app.post("/submit", (req, res) => {
  res.render(__dirname + "/views/index.ejs" ,
    {
      htmlContent : `Total No of letter in your Name is ${req.body['fName'].trim().length + req.body['lName'].trim().length}`
    }
  )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
