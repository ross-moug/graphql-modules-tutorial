import { PubSub } from "apollo-server-express";
import { PostProvider } from "./post.provider";

const POST_ADDED: string = "POST_ADDED";

export default {
  Subscription: {
    postAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: (root, args, { injector }) => injector.get(PubSub).asyncIterator([POST_ADDED])
    }
  },
  Query: {
    posts: (root, args, { injector }) => injector.get(PostProvider).posts()
  },
  Mutation: {
    addPost: (root, args, { injector }) => {
      injector.get(PubSub).publish(POST_ADDED, { postAdded: args });
      return injector.get(PostProvider).addPost(args);
    }
  }
};
