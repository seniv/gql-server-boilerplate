import { Question } from '../../../models/question';

export const Query = {
  questions: () => Question.find({ isResolved: false }),
  question: (_, { id }) => Question.findById(id),
};
