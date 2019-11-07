const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "There has to be a username",
    unique: true
  }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User;
