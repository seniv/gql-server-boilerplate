import mongoose from 'mongoose';

import { schema } from './schema';

export const Question = mongoose.model('Question', schema);
