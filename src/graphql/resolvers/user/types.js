import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';

export const userTypes = {
  questions: ({ _id }) => Question.find({ createdById: _id }),
  answers: ({ _id }) => Answer.find({ createdById: _id }),
};
