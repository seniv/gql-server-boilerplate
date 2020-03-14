import { ApolloServer } from 'apollo-server-express';

import config from '../config';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { getUserFromRequest } from '../helpers';
import { createDataLoaders } from '../loaders';

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUserFromRequest(req),
    loaders: createDataLoaders(),
  }),
  playground: !config.isProduction || config.ENABLE_PLAYGROUND,
  introspection: !config.isProduction || config.ENABLE_PLAYGROUND,
});
