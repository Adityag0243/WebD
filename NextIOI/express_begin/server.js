var express = require("express")
const userRouter = require("./src/routes/user.router")
const cityRouter = require("./src/routes/city.router")
const dbConfig = require("./src/db/db.config")
var app = express()

app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/city", cityRouter)

app.listen(5001, async () => {
    await dbConfig()
    console.log("Server started on port 5001")
})

// m V c
// model view controller