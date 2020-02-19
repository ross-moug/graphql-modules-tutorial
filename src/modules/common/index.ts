import { GraphQLModule } from "@graphql-modules/core";
import { PubSub } from 'graphql-subscriptions';

export const commonModule = new GraphQLModule({
  providers: [PubSub]
});
