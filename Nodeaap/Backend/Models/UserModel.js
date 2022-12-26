const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,

  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// Export Mongodb Model
let User = mongoose.model("uservipul", UserSchema);
module.exports = User;
