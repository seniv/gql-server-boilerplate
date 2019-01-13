import { flatten } from 'ramda';

import Root from './root.gql';
import { User } from './user';

export const typeDefs = flatten([
  Root,
  User,
]);
