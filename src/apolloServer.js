import { ApolloServer, PubSub } from 'apollo-server-express';

import config from './config';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { getUserFromRequest, getUser } from './helpers';
import { createDataLoaders } from './loaders';

const pubSub = new PubSub();

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => ({
    user: connection ? connection.context.user : await getUserFromRequest(req),
    pubSub,
    loaders: createDataLoaders(),
  }),
  subscriptions: {
    path: config.SUBSCRIPTIONS_ENDPOINT,
    onConnect: async (connectionParams) => ({
      user: await getUser(connectionParams.authorization),
    }),
  },
  playground: !config.isProduction || config.ENABLE_PLAYGROUND,
  introspection: !config.isProduction || config.ENABLE_PLAYGROUND,
});
