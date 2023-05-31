const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//routes
const userRoute = require('./routes/user.route');
const gigRoute = require('./routes/gig.route');
const orderRoute = require('./routes/order.route');
const conversationRoute = require('./routes/conversation.route');
const messageRoute = require('./routes/message.route');
const reviewRoute = require('./routes/review.route');
const authRoute = require('./routes/auth.route');

//middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);
//error handlers
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).end(errorMessage);
});

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
