import './startup';

import Express from 'express';

import { apolloServer } from './apolloServer';
import config from './config';

const app = Express();

apolloServer.applyMiddleware({ app, path: config.GRAPHQL_ENDPOINT });

app.listen(config.PORT, () => {
  console.log(`📡 GraphQL endpoint: http://localhost:${config.PORT}${config.GRAPHQL_ENDPOINT}`);
});
