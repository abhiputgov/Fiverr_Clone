const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const userValid = bcrypt.compareSync(req.body.password, user.password);
    if (!userValid) {
      return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );
    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

const logout = () => {};

module.exports = { register, login, logout };
