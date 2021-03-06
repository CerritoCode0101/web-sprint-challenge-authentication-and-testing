const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/secrets');



module.exports = (req, res, next) => {
  const {authorization} = req.headers
  if (authorization){
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err){
        res.status(401).json({message: "invalid Token"})
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(400).json({message: "Token required."});
  }
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
