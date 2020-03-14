import DataLoader from 'dataloader';
import { indexBy, prop, groupBy } from 'ramda';

import { User } from '../models/user';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

const createLoader = (collection, { keyField = '_id' }) => {
  const batchFunction = async (keys) => {
    const docs = await collection.find({ [keyField]: { $in: keys } });

    const indexed = indexBy(prop(keyField), docs);
    return keys.map((key) => indexed[key] || null);
  };

  return new DataLoader(batchFunction);
};

const createOneToMayLoader = (collection, { keyField = '_id' }) => {
  const batchFunction = async (keys) => {
    const docs = await collection.find({ [keyField]: { $in: keys } });

    const grouped = groupBy(prop(keyField), docs);
    return keys.map((key) => grouped[key] || []);
  };

  return new DataLoader(batchFunction);
};

export const createDataLoaders = () => ({
  userById: createLoader(User),

  questionById: createLoader(Question),
  questionsByAuthorId: createOneToMayLoader(Question, { keyField: 'createdById' }),

  answersByQuestionId: createOneToMayLoader(Answer, { keyField: 'questionId' }),
  answersByAuthorId: createOneToMayLoader(Answer, { keyField: 'createdById' }),
});
