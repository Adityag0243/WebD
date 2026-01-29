var express = require("express")
const City = require("../model/city.model")
var cityRouter = express.Router()

cityRouter.post("/createCity", async (req, res) => {
    try{
        let city = await City.create(req.body) 
        res.status(201).json({
            message: "City created successfully",
            data: city
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }   
})
cityRouter.get("/getCities", async (req, res) => {
    try{
        let city = await City.find() 
        res.status(201).json({
            message: "City created successfully",
            data: city
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }   
})




module.exports = cityRouter