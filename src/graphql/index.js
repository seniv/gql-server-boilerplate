import { ApolloServer } from 'apollo-server-express';

import config from '../config';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { getUserFromRequest } from './helpers';

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUserFromRequest(req),
  }),
  playground: !config.isProduction || config.ENABLE_PLAYGROUND,
});
