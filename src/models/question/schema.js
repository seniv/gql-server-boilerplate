import { Schema } from 'mongoose';
import { isMongoId } from 'validator';

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdById: {
    type: String,
    required: true,
    validate: {
      validator: isMongoId,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export { schema };
