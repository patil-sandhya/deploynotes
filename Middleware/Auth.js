const jwt = require("jsonwebtoken")
//const {BlacklistModel} = require("../Model/blacklist.model")
const auth = async(req, res, next)=>{
    let token = req.headers.authorization?.split(" ")[1]
    if(token){
            jwt.verify(token, "notes", (err, decoded)=>{
                if(err){
                    res.send({"err jwt":err})
                }else{
                    console.log(decoded)
                    req.body.userName = decoded.userName
                    req.body.userId= decoded.userId
                    next()
                }
            })
        
    }else{
        res.send({"msg": "Rigister as New user"})
    }
}

module.exports= {
    auth
}