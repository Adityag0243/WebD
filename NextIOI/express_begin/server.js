var express = require("express")
const userRouter = require("./src/routes/user.router")
const cityRouter = require("./src/routes/city.router")
const dbConfig = require("./src/db/db.config")
const cookieParser = require("cookie-parser");

var app = express()

app.use(express.json())
app.use(cookieParser());

app.use("/api/v1/user", userRouter)
app.use("/api/v1/city", cityRouter)

app.listen(5001, async () => {
    await dbConfig()
    console.log("Server started on port 5001")
})