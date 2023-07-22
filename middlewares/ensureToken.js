const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config(); 

const publickey = "-----BEGIN PUBLIC KEY-----\n"+
process.env.PUBLICKEY1+
process.env.PUBLICKEY2+ 
"-----END PUBLIC KEY-----";

const ensureToken = (req,res,next) => {
    const bearerHeader  = req.headers['authorization'];
    
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
         
        jwt.verify(req.token, publickey, {algorithm: ["ES256"]}, function (err, payload) {
            if(err){
                res.sendStatus(403);
            }else{
                next()
            }
        });
        
    }else{
        res.sendStatus(403);
    }
}

module.exports = ensureToken
