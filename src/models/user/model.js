import mongoose from 'mongoose';

import { schema } from './schema';

export const User = mongoose.model('User', schema);
