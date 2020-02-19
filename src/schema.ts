import { GraphQLModule } from "@graphql-modules/core";
import { myFirstModule } from "./modules/my-first-module";

export const { schema } = new GraphQLModule({
  imports: [
    myFirstModule,
  ],
});
