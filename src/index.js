import './startup';

import Express from 'express';
import { apolloServer } from './graphql';

const {
  GRAPHQL_ENDPOINT = '/graphql',
  PORT = 3001,
} = process.env;

const app = Express();

apolloServer.applyMiddleware({ app, path: GRAPHQL_ENDPOINT });

app.listen(PORT, () => {
  console.log(`GraphQL endpoint: http://localhost:${PORT}${GRAPHQL_ENDPOINT}`);
});
