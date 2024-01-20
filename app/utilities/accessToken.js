const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.TOKEN_SECRET;

module.exports = {
    generateAccessToken: function(email) {
        return jwt.sign({email: email}, secret, { expiresIn: '1800s' });
    },

    authenticateToken: function(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null) return res.sendStatus(401)
    
        jwt.verify(token, secret, (err, User) => {
            console.log(err)
            if (err) return res.sendStatus(403)
    
            req.user = User
            next()
        })
    }
}
