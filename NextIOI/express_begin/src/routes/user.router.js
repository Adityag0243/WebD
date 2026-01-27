var express = require("express")
var userRouter = express.Router()
const pool = require("../db/db.js");
const User = require("../model/user.model.js");

userRouter.get("/getUsers", async (req, res) => {
    const prod = await pool.query("SELECT * FROM users")
    res.json(prod.rows)
})
userRouter.post("/createUsers", async (req, res) => {
    try{
    let user = await User.create(req.body) 
    res.status(201).json({
        message: "User created successfully",
        data: user
    })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }  
})

module.exports = userRouter