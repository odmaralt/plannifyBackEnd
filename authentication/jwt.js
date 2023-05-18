const jwt = require("jsonwebtoken");
const { response } = require("express");

//generate the token
module.exports.tokenGenerate = (email, userId) => {
  return jwt.sign({ email: email, userId: userId }, "myTempSecret", {
    expiresIn: "3d",
  });
};
//verify the token

module.exports.checkToken = async (req, response, next) => {
  const token = req.headers.authorization;
  if (!token) {
    response.status(401).json({ message: "No authorization token provided!" });
    return;
  }
  jwt.verify(token.split(" ")[1], "myTempSecret", (err, result) => {
    if (err) {
      response.status(401).send("No authorization token provided!");
      return;
    }
    response.locals.userId = result.userId;
    next();
    return;
  });
};
