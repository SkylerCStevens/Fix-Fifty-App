const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;
// create user schema
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "There has to be a username",
    unique: true
  },
  googleId: String
});
// use passport with mongoose
userSchema.plugin(passportLocalMongoose);
// use findorcreate
userSchema.plugin(findOrCreate);
// create user model
const User = mongoose.model("user", userSchema);
// export user model
module.exports = User;
