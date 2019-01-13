import { reduce, mergeDeepRight } from 'ramda';

import { Scalars } from './scalars';
import { User } from './user';
import { Auth } from './auth';
import { Question } from './question';
import { Answer } from './answer';

const mergeResolvers = reduce(mergeDeepRight, []);

export const resolvers = mergeResolvers([
  Scalars,
  User,
  Auth,
  Question,
  Answer,
]);
