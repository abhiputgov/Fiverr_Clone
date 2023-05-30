const User = require("../models/user.model");
const register = async (req, res) => {
  try {
    const newUser = new User({
      username: "test",
      email: "test@test.com",
      password: "test",
      country: "test",
    });
    await newUser.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

const login = () => {};

const logout = () => {};

module.exports = { register, login, logout };
