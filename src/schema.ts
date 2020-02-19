import { GraphQLModule } from "@graphql-modules/core";
import express from "express";
import { myFirstModule } from "./modules/my-first-module";
import { mySecondModule } from "./modules/my-second-module";

export const { schema } = new GraphQLModule({
  imports: [
    myFirstModule,
    mySecondModule,
  ],
  context(session: express.Request) {
    return {
      authToken: session.headers.authorization
    };
  }
});
