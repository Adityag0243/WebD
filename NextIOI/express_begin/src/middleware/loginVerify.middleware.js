const jwt = require("jsonwebtoken")

function checkLogin(req, res, next){
    try{
        let token = req.cookies.access_token
        if (!token) {
            return res.status(401).json({ message: "Login required" });
        }

        const decoded = jwt.verify(token, '123Aditya');
        req.user = decoded;
        console.log(req.user);
        next();
    }catch(error){
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = {checkLogin}
