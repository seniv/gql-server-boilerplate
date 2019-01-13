import { reduce, mergeDeepRight } from 'ramda';

import { Scalars } from './scalars';
import { User } from './user';
import { Auth } from './auth';

const mergeResolvers = reduce(mergeDeepRight, []);

export const resolvers = mergeResolvers([
  Scalars,
  User,
  Auth,
]);
