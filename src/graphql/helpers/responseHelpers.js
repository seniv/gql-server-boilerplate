import { ApolloError } from 'apollo-server-express';

export const errorIfNotFound = (errorMessage = 'Not found!') => (obj) => {
  if (obj) {
    return obj;
  }
  throw new ApolloError(errorMessage);
};
