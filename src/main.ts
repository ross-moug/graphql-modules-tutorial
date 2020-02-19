import "graphql-import-node";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { Express } from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";

const app: Express = express();

const server: ApolloServer = new ApolloServer({ schema });

server.applyMiddleware({app, path: '/'});

app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
