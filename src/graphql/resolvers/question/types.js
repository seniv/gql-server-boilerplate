import { Answer } from '../../../models/answer';

export const questionTypes = {
  author: ({ createdById }, _, { loaders: { userById } }) => userById.load(createdById),
  answers: ({ _id }) => Answer.find({ questionId: _id }),
};
