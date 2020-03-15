import './startup';

import Express from 'express';
import http from 'http';

import { apolloServer } from './apolloServer';
import config from './config';

const app = Express();

apolloServer.applyMiddleware({ app, path: config.GRAPHQL_ENDPOINT });

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(config.PORT, () => {
  console.log(`📡 GraphQL endpoint: http://localhost:${config.PORT}${apolloServer.graphqlPath}`);
  console.log(`🔌 Subscriptions endpoint: http://localhost:${config.PORT}${apolloServer.subscriptionsPath}`);
});
