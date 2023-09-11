const jwt = require("jsonwebtoken");

const key = "privateKey";

const generateToken = (userID) => {
  const token = jwt.sign({ userID }, key, { expiresIn: "1h" });
  return token;
};

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("The user is not authenticated (logged in)");
    }
    jwt.verify(token, key, (err, decoded) => {
        if (err) {
        return res.status(401).send("The user is not authenticated (logged in)");
        }
        req.userID = decoded.userID;
        next();
    });
};

module.exports = { generateToken, authMiddleware };
