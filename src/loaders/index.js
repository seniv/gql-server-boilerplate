import DataLoader from 'dataloader';
import { indexBy, prop, groupBy } from 'ramda';

import { User } from '../models/user';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

const oneToOneMapper = ({ docs, keys, keyField }) => {
  const indexed = indexBy(prop(keyField), docs);
  return keys.map((key) => indexed[key] || null);
};

const oneToManyMapper = ({ docs, keys, keyField }) => {
  const grouped = groupBy(prop(keyField), docs);
  return keys.map((key) => grouped[key] || []);
};


const createLoader = (collection, { keyField = '_id', mapper = oneToOneMapper } = {}) => {
  const batchFunction = async (keys) => {
    const docs = await collection.find({ [keyField]: { $in: keys } });
    return mapper({ docs, keys, keyField });
  };

  return new DataLoader(batchFunction);
};

export const createDataLoaders = () => ({
  userById: createLoader(User),

  questionById: createLoader(Question),
  questionsByAuthorId: createLoader(Question, { keyField: 'createdById', mapper: oneToManyMapper }),

  answersByQuestionId: createLoader(Answer, { keyField: 'questionId', mapper: oneToManyMapper }),
  answersByAuthorId: createLoader(Answer, { keyField: 'createdById', mapper: oneToManyMapper }),
});
