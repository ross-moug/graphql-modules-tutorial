import { ModuleContext } from "@graphql-modules/core";
import { UserProvider } from "./user.provider";

export default {
  Query: {
    user: (_, { id }: { id: string }, { injector }: ModuleContext) => injector.get(UserProvider).getUserById(id),
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
