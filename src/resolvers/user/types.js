import R from 'ramda';

export const userTypes = {
  questions: ({ _id }, _, { loaders: { questionsByAuthorId } }) => questionsByAuthorId.load(_id),
  answers: ({ _id }, _, { loaders: { answersByAuthorId } }) => answersByAuthorId.load(_id),
  // Field "Email" is private, and will be shown only for owner of the email
  email: ({ _id, email }, _, context) => (
    R.pathEq(['user', '_id'], _id, context) ? email : null
  ),
};
