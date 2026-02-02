var express = require("express")
const userRouter = require("./src/routes/user.router")
const cityRouter = require("./src/routes/city.router")
const dbConfig = require("./src/db/db.config")
const cookieParser = require("cookie-parser");
const cors = require("cors");
var app = express()
const dotenv = require("dotenv");
const passport = require("passport");
const authRouter = require("./src/routes/auth.route");
dotenv.config();

app.use(express.json())
app.use(cookieParser());
app.use(cors());
require("./src/config/passport");

app.use(passport.initialize()); 

app.use("/auth", authRouter);

app.use("/api/v1/user", userRouter)
app.use("/api/v1/city", cityRouter)

app.listen(5001, async () => {
    await dbConfig()
    console.log("Server started on port 5001")
})