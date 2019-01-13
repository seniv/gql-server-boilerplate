import { Query } from './query';
import { Mutation } from './mutation';
import { questionTypes } from './types';

export const Question = {
  Mutation,
  Query,
  Question: questionTypes,
};
