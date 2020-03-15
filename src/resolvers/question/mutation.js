import { Question } from '../../models/question';
import { authRequired, errorIfNotFound, publishAndReturn } from '../../helpers';
import { Subscriptions } from '../../constants';

const cannotEditError = errorIfNotFound('You cannot edit this question');
const cannotDeleteError = errorIfNotFound('You cannot delete this question');
const cannotMarkAsResolvedError = errorIfNotFound('You cannot mark this question as resolved');

export const Mutation = {
  createQuestion: authRequired((_, { input }, { user, pubSub }) =>
    Question.create({ ...input, createdById: user._id })
      .then(publishAndReturn(Subscriptions.QUESTION_ADDED, pubSub)),
  ),

  updateQuestion: authRequired((_, { id, input }, { user, pubSub }) =>
    Question.findOneAndUpdate({ _id: id, createdById: user._id }, input, { new: true })
      .then(cannotEditError)
      .then(publishAndReturn(Subscriptions.QUESTION_UPDATED, pubSub)),
  ),

  removeQuestion: authRequired(async (_, { id }, { user, pubSub }) =>
    Question.findOneAndDelete({ _id: id, createdById: user._id })
      .then(cannotDeleteError)
      .then(publishAndReturn(Subscriptions.QUESTION_REMOVED, pubSub)),
  ),

  markQuestionAsResolved: authRequired((_, { id }, { user, pubSub }) =>
    Question.findOneAndUpdate(
      { _id: id, createdById: user._id, isResolved: false },
      { isResolved: true },
      { new: true },
    )
      .then(cannotMarkAsResolvedError)
      .then(publishAndReturn(Subscriptions.QUESTION_UPDATED, pubSub)),
  ),
};
