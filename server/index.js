const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs/index");
const resolvers = require("./graphql/resolvers/index");
require("dotenv").config();
require("./db/mongoose");

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.applyMiddleware({ app });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
