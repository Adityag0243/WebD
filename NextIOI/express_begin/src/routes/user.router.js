var express = require("express")
var userRouter = express.Router()
const pool = require("../db/db.js");
const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
``

const jwt = require("jsonwebtoken");
const { checkLogin } = require("../middleware/loginVerify.middleware.js");

userRouter.get("/getUsers", async (req, res) => {
    const prod = await pool.query("SELECT * FROM users")
    res.json(prod.rows)
})

userRouter.post("/createUsers", async (req, res) => {
    console.log("Got up here in backend :: ", req.body)
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


userRouter.post("/logIn", async (req, res) => {
    try{
        let {email, password} = await req.body
        if(!email || !password){
            req.json({Message:"Kindly provide either email or password"})
        }
        let user = await User.findOne({email:email}).select("+password");
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const flag = await bcrypt.compare(password,user.password);

        if(flag){
            let token = await jwt.sign({email:email, role : user.role}, "123Aditya")
            if(token){
                res.cookie("access_token",token,{
                     maxAge: 24 * 60 * 60 * 1000 
                })
                res.json({Message:"Login Successfully", access_token : token, data:user})
            }
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }  
})





userRouter.get('/profile',checkLogin, (req,res) =>{
    try{
        res.json({Message:"I am the one", user:req.user})
    }
    catch(error){
        res.error({Message:"Something went wrong",error:error.message})
    }
})

module.exports = userRouter