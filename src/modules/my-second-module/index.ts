import { GraphQLModule } from "@graphql-modules/core";
import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";

export const mySecondModule = new GraphQLModule({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
