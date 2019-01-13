import R from 'ramda';
import { Schema } from 'mongoose';
import { isEmail } from 'validator';

import { UserRoles } from './constants';

const userProfile = {
  fullName: {
    type: String,
  },
  bio: {
    type: String,
  },
};

const schema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: isEmail,
    },
  },
  password: {
    type: String,
    required: true,
  },
  profile: userProfile,
  role: {
    type: String,
    enum: R.values(UserRoles),
    default: UserRoles.USER,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export { schema };
