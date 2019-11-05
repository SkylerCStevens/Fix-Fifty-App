require("dotenv").config();

const mongoose = require("mongoose");
encrypt = require("mongoose-encryption");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "There has to be a First Name"
  },
  lastName: {
    type: String,
    trim: true,
    required: "There has to be a Last Name"
  },
  email: {
    type: String,
    trim: true,
    required: "There has to be an email address",
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: "There has to be a password"
  }
});

const secret = process.env.SECRET;

userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const User = mongoose.model("user", userSchema);

module.exports = User;
