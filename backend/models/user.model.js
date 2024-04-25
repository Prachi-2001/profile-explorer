const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter lastname"],
  },
  phoneNumber: {
    required: [true, "Please enter your phone number"],
    minLength: [10, "Phone number should be 10 digits"],
    maxLength: [20, "Phone number should be 10 digits"],
    type: Number,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
  address: {
    type: String,
    required: [true, "Please enter address"],
  },
  lat: {
    type: Number,
    default: 0,
  },
  lng: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
