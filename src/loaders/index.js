import DataLoader from 'dataloader';
import { indexBy, prop } from 'ramda';

import { User } from '../models/user';
import { Question } from '../models/question';

const createDataLoader = ({ collection, keyField = '_id' }) => {
  const batchFunction = async (keys) => {
    const docs = await collection.find({ [keyField]: { $in: keys } });

    const indexed = indexBy(prop(keyField), docs);
    return keys.map((key) => indexed[key] || null);
  };

  return new DataLoader(batchFunction);
};

export const createDataLoaders = () => ({
  userById: createDataLoader({ collection: User }),
  questionById: createDataLoader({ collection: Question }),
});
