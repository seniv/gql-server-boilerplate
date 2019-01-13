import { flatten } from 'ramda';

import Root from './root.gql';
import { Scalars } from './scalars';
import { User } from './user';
import { Auth } from './auth';
import { Question } from './question';

export const typeDefs = flatten([
  Root,
  Scalars,
  User,
  Auth,
  Question,
]);
