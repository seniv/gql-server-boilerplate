import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { authRequired, errorIfNotFound } from '../../helpers';

const cannotAddError = errorIfNotFound('You cannot add answer to this question');
const cannotEditError = errorIfNotFound('You cannot edit this answer');
const cannotDeleteError = errorIfNotFound('You cannot delete this answer');

export const Mutation = {
  createAnswer: authRequired((_, { questionId, input }, { user }) =>
    Question.find({ _id: questionId, isResolved: false })
      .then(cannotAddError)
      .then(() => Answer.create({
        ...input,
        createdById: user._id,
        questionId,
      })),
  ),
  updateAnswer: authRequired((_, { id, input }, { user }) =>
    Answer.findOneAndUpdate({ _id: id, createdById: user._id }, input, { new: true })
      .then(cannotEditError),
  ),
  removeAnswer: authRequired(async (_, { id }, { user }) =>
    Answer.findOneAndDelete({ _id: id, createdById: user._id })
      .then(cannotDeleteError),
  ),
};
