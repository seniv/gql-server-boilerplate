
export const answerTypes = {
  author: ({ createdById }, _, { loaders: { userById } }) => userById.load(createdById),
  question: ({ questionId }, _, { loaders: { questionById } }) => questionById.load(questionId),
};
