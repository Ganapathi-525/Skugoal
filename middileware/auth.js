
const jwt=require('jsonwebtoken')
const SECRET_KEY='my_secret_key'

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        let a=token.split(" ")
        console.log(a[1])
        if (!token) {
            return res.status(400).json({ message: 'Authorization token is missing' });
        }
      console.log(jwt.verify(a[1],SECRET_KEY))
        const decoded = jwt.verify(a[1],SECRET_KEY); 
        console.log(`hi ${decoded}`)
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware