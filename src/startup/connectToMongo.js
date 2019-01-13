import mongoose from 'mongoose';

import config from '../config';

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Successful connected to MongoDB'))
  .catch(err => console.error(`Connecting to MongoDB was failed: ${err}`));
