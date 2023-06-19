const Gig = require('../models/gig.model');
const { createError } = require('../utils/createError');

const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, 'Only Sellers can create a gig!'));
  }

  const newGig = new Gig({
    userId: req.userID,
    ...req.body,
  });
  try {
    const saveGig = await newGig.save();
    res.status(201).send('The gig is created and saved successfully');
  } catch (error) {
    next(error);
  }
};

const deleteGig = async (req, res, next) => {};

const getGig = async (req, res, next) => {};

const getGigs = async (req, res, next) => {};

module.exports = { createGig, deleteGig, getGig, getGigs };
