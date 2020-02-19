import { UserProvider } from "./user.provider";

export default {
  Query: {
    user: (root, { id }, { injector }) => injector.get(UserProvider).getUserById(id),
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
