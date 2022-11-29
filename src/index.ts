import 'reflect-metadata';
import {ApolloServer} from 'apollo-server';
import {prisma} from './context';
import {schema} from './scheme';

// サーバ起動
const server = new ApolloServer({
  schema: schema,
  context: () => ({prisma}),
});
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
