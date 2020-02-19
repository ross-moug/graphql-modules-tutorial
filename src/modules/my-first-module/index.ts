import { GraphQLModule } from "@graphql-modules/core";
import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";

export const myFirstModule = new GraphQLModule({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
