import "graphql-import-node";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { Express } from "express";
import graphqlHTTP from "express-graphql";
import { schema, subscriptions } from "./schema";
import { createServer } from "http";

const app: Express = express();

const server: ApolloServer = new ApolloServer({
  schema,
  subscriptions,
});

server.applyMiddleware({ app });

// app.use("/graphql", graphqlHTTP({
//   schema,
// }));

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${ server.graphqlPath }`);
  console.log(`🚀 Subscriptions ready at ws://localhost:4000${ server.subscriptionsPath }`);
});
