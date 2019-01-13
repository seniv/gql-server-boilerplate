import mutation from './mutation.gql';
import query from './query.gql';
import type from './type.gql';

export const Question = [
  type,
  query,
  mutation,
].join('');
