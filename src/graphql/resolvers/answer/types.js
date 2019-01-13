import { User } from '../../../models/user';
import { Question } from '../../../models/question';

export const answerTypes = {
  author: ({ createdById }) => User.findById(createdById),
  question: ({ questionId }) => Question.findById(questionId),
};
