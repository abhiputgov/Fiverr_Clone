const express = require('express');
const router = express.Router();
const {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} = require('../controllers/gig.controller');
const { verifyToken } = require('../middleware/jwt');

router.post('/', verifyToken, createGig);
router.delete('/:id', verifyToken, deleteGig);
router.get('/single/:id', getGig);
router.get('/', getGigs);

module.exports = router;
