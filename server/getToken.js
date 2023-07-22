
const jwt = require('jsonwebtoken');
const Redis = require('../redis')

let prvtkey = "-----BEGIN EC PRIVATE KEY-----\n" +
    process.env.PRIVATEKEY1 +
    process.env.PRIVATEKEY2 +
    process.env.PRIVATEKEY3 +
    "-----END EC PRIVATE KEY-----";

exports.getToken = (req, res) => {
    return new Promise(async function (resolve, reject) {
        const authorization = req.headers['authorization'];
        try {
            if (authorization === process.env.AUTHORIZATION) {
                const token = jwt.sign({ authorization: authorization }, prvtkey, {
                    expiresIn: "3600s",
                    algorithm: "ES256",
                });
                await Redis.set('access_token', token); 
                res.json({
                    code : true,
                    data : token,
                    message : "success"
                }); 
            } else { 
                await Redis.set('access_token', ""); 
                res.json({
                    code : false,
                    data : "",
                    message : "Unauthorized"
                });
            }
        } catch (error) {
            res.json({
                code : false,
                data : error.message,
                message : error.message 
            });
        }
    })
}
