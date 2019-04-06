import R from 'ramda';

import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';

export const userTypes = {
  questions: ({ _id }) => Question.find({ createdById: _id }),
  answers: ({ _id }) => Answer.find({ createdById: _id }),
  // Field "Email" is private, and will be shown only for owner of the email
  email: ({ _id, email }, _, context) => (
    R.pathEq(['user', '_id'], _id, context) ? email : null
  ),
};
