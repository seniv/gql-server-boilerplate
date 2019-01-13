import {
  cleanEnv,
  port,
  str,
  url,
} from 'envalid';

export default cleanEnv(process.env, {
  PORT: port({
    default: 3001,
    desc: 'Port of the server',
  }),
  GRAPHQL_ENDPOINT: str({
    default: '/graphql',
    desc: 'Path of graphql endpoit',
  }),
  MONGO_URI: url({
    desc: 'URI of MongoDB server to connect with',
  }),
});
