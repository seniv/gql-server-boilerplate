import { mergeResolvers } from 'merge-graphql-schemas';

import { Scalars } from './scalars';
import { User } from './user';
import { Auth } from './auth';
import { Question } from './question';
import { Answer } from './answer';

export const resolvers = mergeResolvers([
  Scalars,
  User,
  Auth,
  Question,
  Answer,
]);
