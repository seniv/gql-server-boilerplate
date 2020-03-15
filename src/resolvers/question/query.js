import { Question } from '../../models/question';
import { authRequired } from '../../helpers';

export const Query = {
  questions: (_, { search }) =>
    Question.find({
      isResolved: false,
      ...search && { $text: { $search: search } },
    }),
  question: (_, { id }) => Question.findById(id),
  myQuestions: authRequired(
    (_, __, { user }) => Question.find({ createdById: user._id }),
  ),
};
