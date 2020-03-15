import { Question } from '../../models/question';
import { authRequired, errorIfNotFound } from '../../helpers';

const cannotEditError = errorIfNotFound('You cannot edit this question');
const cannotDeleteError = errorIfNotFound('You cannot detele this question');
const cannotMarkAsResolvedError = errorIfNotFound('You cannot mark this question as resolved');

export const Mutation = {
  createQuestion: authRequired((_, { input }, { user }) =>
    Question.create({ ...input, createdById: user._id }),
  ),

  updateQuestion: authRequired((_, { id, input }, { user }) =>
    Question.findOneAndUpdate({ _id: id, createdById: user._id }, input, { new: true })
      .then(cannotEditError),
  ),

  removeQuestion: authRequired(async (_, { id }, { user }) =>
    Question.findOneAndDelete({ _id: id, createdById: user._id })
      .then(cannotDeleteError),
  ),

  markQuestionAsResolved: authRequired((_, { id }, { user }) =>
    Question.findOneAndUpdate(
      { _id: id, createdById: user._id, isResolved: false },
      { isResolved: true },
      { new: true },
    )
      .then(cannotMarkAsResolvedError),
  ),
};
