const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const createError = require('../utils/createError');
const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return next(createError(403, 'YOu are not authorised to delete this user'));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send('User deleted');
};

module.exports = { deleteUser };
