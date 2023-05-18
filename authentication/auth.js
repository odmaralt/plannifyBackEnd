const { compareHash } = require("../bcrypt/bcrypt");
const UserModel = require("../models/userSchema");
const { tokenGenerate } = require("./jwt");

module.exports.authRegister = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ email: req.body.email }],
    });
    console.log(user);
    if (user) {
      res.status(400).send({ message: "Email address is already in use!" });
      return;
    } else {
      next();
      return;
    }
  } catch (err) {
    res.status(500).send({ message: err });
    return;
  }
};
module.exports.authLoginWithJwt = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid User",
    });
  }
  const isPasswordCorrect = compareHash(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(404).json({
      success: false,
      message: "Invalid Password",
    });
  }
  const token = tokenGenerate(email, user._id);
  return res.status(200).json({
    success: true,
    data: {
      user: user,
      token: token,
    },
  });
};
