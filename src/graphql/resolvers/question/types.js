import { User } from '../../../models/user';
import { Answer } from '../../../models/answer';

export const questionTypes = {
  author: ({ createdById }) => User.findById(createdById),
  answers: ({ _id }) => Answer.find({ questionId: _id }),
};
