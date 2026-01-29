const jwt = require("jsonwebtoken")

function checkLogin(req, res, next){
    try{
        let token = req.cookies.access_token
        jwt.verify(token,"123Aditya")
    }catch(error){

    }
}

