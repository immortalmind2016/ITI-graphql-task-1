const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { UserDataSource } = require("./datasource/user");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv/config");
mongoose.connect(
  "mongodb+srv://immortalmind:0115120323a@cluster0.24rs5.mongodb.net/ITI?retryWrites=true&w=majority"
);
const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "..", "schema.graphql"), "utf8")
);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => {
    const { authorization } = req.headers;
    const [_, token] = authorization.split(" ");
    const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return {
      user,
    };
  },
  dataSources: () => ({
    user: new UserDataSource(),
  }),
});

server.listen(8000, () => {
  console.log("The server has been started on port 8000");
});
