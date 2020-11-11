import { ApolloServer, gql } from "apollo-server-micro";
console.log("api/index.js");
/*
  A schema is a collection of type definitions (hence "typeDefs")
  that together define the "shape" of queries that are executed against
  your data.
*/
const typeDefs = gql`
  # This "Todo" type defines the queryable fields for every todo in our data source.
  type Todo {
    id: String
    summary: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    todos: [Todo]
  }
`;

// Sample Data set
const todos = [
  { id: "1", summary: "todo summary 1" },
  { id: "2", summary: "todo summary 2" },
  { id: "3", summary: "todo summary 3" },
  { id: "4", summary: "todo summary 4" },
];

// Resolvers
const resolvers = {
  Query: {
    todos: () => todos
  }
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = server.createHandler({ path: '/api/graphql' });

export default handler;
