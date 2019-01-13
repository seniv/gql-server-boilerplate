import { reduce, mergeDeepRight } from 'ramda';
import { User } from './user';

const mergeResolvers = reduce(mergeDeepRight, []);

export const resolvers = mergeResolvers([
  User,
]);
