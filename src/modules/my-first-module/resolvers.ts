import { ModuleContext } from "@graphql-modules/core";
import { IMyFirstModuleContext } from "./index";
import { UserProvider } from "./user.provider";

export default {
  Query: {
    user: (_, { id }: { id: string }, { injector, myField }: ModuleContext<IMyFirstModuleContext>) => injector.get(UserProvider).getUserById(id, myField),
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
