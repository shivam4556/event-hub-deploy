const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
  name: {
    fname: String,
    lname: String,
  },
  email: String,
  password: {
    type: String,
    min: 6,
    max: 20,
  },
  dob: Date,
  gender: String,
  mobile: {
    type: String,
    min: 10,
    max: 10,
  },
  address: {
    street: String,
    state: String,
    city: String,
    pincode: Number,
  },
  bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

usersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const User = mongoose.model("User", usersSchema);

module.exports = User;
