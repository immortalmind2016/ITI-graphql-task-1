const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  { email: String, password: String, name: String, age: String },
  {
    timestamps: true,
  }
);

module.exports.UserModel = mongoose.model("User", UserSchema);
