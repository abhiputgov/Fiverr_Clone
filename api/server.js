require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI + '?dbname=fiverr');
    app.listen(8800, () => {
      console.log('Backend Server is running in port 8800');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
