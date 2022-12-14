const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
  uploads: false,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
