const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const createError = require('../utils/createError');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send('User created');
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, 'User not found'));
    }
    const userValid = bcrypt.compareSync(req.body.password, user.password);
    if (!userValid) {
      return fnext(createError(400, 'Invalid Credentials'));
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY,
    );
    const { password, ...info } = user._doc;
    return res
      .cookie('accessToken', token, { httpOnly: true })
      .status(200)
      .send(info);
  } catch (err) {
    return next(err);
  }
};

const logout = (res, req, next) => {
  res
    .clearCookie('accessToken', { sameSite: 'none', secure: true })
    .status(200)
    .send('User logged out');
};

module.exports = { register, login, logout };
