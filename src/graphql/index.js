import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
