import { ModuleContext } from "@graphql-modules/core";
import gql from "graphql-tag";
import {
  IMyFirstModuleContext,
  myFirstModule
} from "./my-first.module";
import { execute } from "graphql";

describe("myFirstModule", () => {
  it("FieldResolver of Query: userById", async () => {
    const { schema, injector } = myFirstModule;

    myFirstModule.mock({
      resolvers: {
        Query: {
          foo: (_, __, { myField }) => myField
        }
      },
      contextBuilder: () => Promise.resolve(<ModuleContext<IMyFirstModuleContext>>({
        myField: 'FOO'
      })),
    });

    const result = await execute({
      schema,
      document: gql`
          query {
              userById(id: "ANOTHERID") {
                  id
                  username
              }
          }
      `
    });
    expect(result.errors).toBeFalsy();
    expect(result.data["userById"]["id"]).toBe("ANOTHERID");
    expect(result.data["userById"]["username"]).toBe("USERNAME");
  });
});
