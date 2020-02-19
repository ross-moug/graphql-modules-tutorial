import { GraphQLModule } from "@graphql-modules/core";
import express from "express";
import { myFirstModule } from "./modules/my-first-module";

export const { schema } = new GraphQLModule({
  imports: [
    myFirstModule,
  ],
  context(session: express.Request) {
    return {
      authToken: session.headers.authorization
    };
  }
});
