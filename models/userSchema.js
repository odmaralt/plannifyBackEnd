const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name length must be at least 3 characters"],
    maxLength: [50, "First name length must be 2 to 30 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    maxlength: [40, "Last name length must be 3 to 40 characters"],
  },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: true },
  lastLogin: { type: String },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
