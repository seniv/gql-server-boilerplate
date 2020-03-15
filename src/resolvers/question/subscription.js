import { withFilter } from 'apollo-server-express';
import { Subscriptions } from '../../constants';

export const Subscription = {
  questionAdded: {
    subscribe: (_, __, { pubSub }) => pubSub.asyncIterator(Subscriptions.QUESTION_ADDED),
  },
  questionUpdated: {
    subscribe: withFilter(
      (_, __, { pubSub }) => pubSub.asyncIterator(Subscriptions.QUESTION_UPDATED),
      (payload, args) => payload[Subscriptions.QUESTION_UPDATED]._id.toString() === args.id,
    ),
  },
  questionRemoved: {
    subscribe: withFilter(
      (_, __, { pubSub }) => pubSub.asyncIterator(Subscriptions.QUESTION_REMOVED),
      (payload, args) => payload[Subscriptions.QUESTION_REMOVED]._id.toString() === args.id,
    ),
  },
};
