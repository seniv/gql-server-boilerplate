import { Query } from './query';
import { Mutation } from './mutation';
import { questionTypes } from './types';
import { Subscription } from './subscription';

export const Question = {
  Mutation,
  Query,
  Subscription,
  Question: questionTypes,
};
