import mongoose from "mongoose";

import { app } from './app';

const start = async () => {
<<<<<<< HEAD
  console.log('Starting up...3');

=======
  console.log('origin origin')
>>>>>>> 0fbfff1ea0a03981fdcf428e8800b2318d9fb513
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  };
  
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000 - index ?');
  });
};

start();