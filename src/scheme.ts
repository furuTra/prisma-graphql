import {buildSchemaSync} from 'type-graphql';
import {resolvers} from './generated/typegraphql-prisma';
// import {
//   FindManyUserResolver,
//   FindUniqueUserResolver,
//   UserCrudResolver,
//   CreateUserResolver,
//   DeleteUserResolver,
//   UpdateUserResolver,
//   CreateManyUserResolver,
// } from './generated/typegraphql-prisma';

export const schema = buildSchemaSync({
  // resolvers: [
  //   FindManyUserResolver,
  //   FindUniqueUserResolver,
  //   UserCrudResolver,
  //   CreateUserResolver,
  //   CreateManyUserResolver,
  //   DeleteUserResolver,
  //   UpdateUserResolver,
  // ],
  resolvers: resolvers,
  validate: false,
});
