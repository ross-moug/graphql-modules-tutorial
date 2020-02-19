import { GraphQLModule } from "@graphql-modules/core";
import express from "express";
import { commonModule } from "./modules/common";
import { myFirstModule } from "./modules/my-first-module/my-first.module";
import { mySecondModule } from "./modules/my-second-module/my-second.module";
import { postModule } from "./modules/post-module/post.module";

export const { schema, subscriptions } = new GraphQLModule({
  imports: [
    myFirstModule,
    mySecondModule,
    commonModule,
    postModule,
  ],
  // context(session: express.Request) {
  //   return {
  //     authToken: session.headers.authorization
  //   };
  // }
});
