import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error('Environment variable "MONGO_URI" is required!');
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Successful connected to MongoDB'))
  .catch(err => console.error(`Connecting to MongoDB was failed: ${err}`));
