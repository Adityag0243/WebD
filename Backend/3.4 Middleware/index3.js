import express from "express";

const app = express();
const port = 3000;




// custom middlewares
function logger (req,res,next){
  console.log("Req method: ", req.method);
  console.log("Req url   : ", req.url);
  next();              // very important to write this otherwise page got stuck in this function never able to go to the app.get method
}

app.use(logger);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
