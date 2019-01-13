import { Question } from '../../../models/question';

export const userTypes = {
  questions: ({ _id }) => Question.find({ createdById: _id }),
};
