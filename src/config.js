import {
  cleanEnv,
  port,
  str,
  url,
  bool,
} from 'envalid';

export default cleanEnv(process.env, {
  PORT: port({
    default: 3001,
    desc: 'Port of the server',
  }),
  GRAPHQL_ENDPOINT: str({
    default: '/graphql',
    desc: 'Path of graphql endpoint',
  }),
  ENABLE_PLAYGROUND: bool({
    default: false,
    desc: 'Enable GraphQL Playground on production',
  }),
  NODE_ENV: str({
    default: 'development',
    desc: 'NodeJS Environment',
  }),
  MONGO_URI: url({
    desc: 'URI of MongoDB server to connect with',
  }),
  JWT_SECRET: str({
    desc: 'Random string. Used to sign JWT tokens',
  }),
});
