import { flatten } from 'ramda';
import { mergeTypes } from 'merge-graphql-schemas';

import { Scalars } from './scalars';
import { User } from './user';
import { Auth } from './auth';
import { Question } from './question';
import { Answer } from './answer';

export const typeDefs = mergeTypes(flatten([
  Scalars,
  User,
  Auth,
  Question,
  Answer,
]));

console.log('merged', typeDefs);
