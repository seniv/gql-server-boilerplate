
export const questionTypes = {
  author: ({ createdById }, _, { loaders: { userById } }) => userById.load(createdById),
  answers: ({ _id }, _, { loaders: { answersByQuestionId } }) => answersByQuestionId.load(_id),
};
