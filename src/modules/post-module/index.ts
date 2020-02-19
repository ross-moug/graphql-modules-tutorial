import { GraphQLModule } from "@graphql-modules/core";
import { commonModule } from "../common";
import { PostProvider } from "./post.provider";
import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";

export interface IMyFirstModuleContext {
  myField: string;
}

export const postModule = new GraphQLModule<{}, {}, IMyFirstModuleContext>({
  typeDefs: typeDefs,
  resolvers: resolvers,
  providers: [PostProvider],
  imports: [commonModule],
});
