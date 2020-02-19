import { GraphQLModule } from "@graphql-modules/core";
import { mySecondModule } from "../my-second-module/my-second.module";
import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";
import { UserProvider } from "./user.provider";

export interface IMyFirstModuleContext {
  myField: string;
}

export const myFirstModule = new GraphQLModule<{}, {}, IMyFirstModuleContext>({
  typeDefs: typeDefs,
  resolvers: resolvers,
  providers: [UserProvider],
  imports: [mySecondModule],
  context: () => ({
      myField: 'some-value'
  }),
});
