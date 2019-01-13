import mongoose from 'mongoose';

import { schema } from './schema';

export const Answer = mongoose.model('Answer', schema);
