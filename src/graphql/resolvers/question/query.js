import { Question } from '../../../models/question';

export const Query = {
  questions: () => Question.find(),
  question: (_, { id }) => Question.findById(id),
};
