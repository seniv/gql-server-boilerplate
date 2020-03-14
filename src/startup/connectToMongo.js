import mongoose from 'mongoose';

import config from '../config';

mongoose.set('debug', config.isDevelopment);

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('✅ Successful connected to MongoDB'))
  .catch((err) => console.error(`❌ Connecting to MongoDB was failed: ${err}`));
