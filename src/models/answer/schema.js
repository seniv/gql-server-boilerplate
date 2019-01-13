import { Schema } from 'mongoose';
import { isMongoId } from 'validator';

const schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
    validate: {
      validator: isMongoId,
    },
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
