import { ApolloServer, gql } from "apollo-server-micro";

/*
  A schema is a collection of type definitions (hence "typeDefs")
  that together define the "shape" of queries that are executed against
  your data.
*/
const typeDefs = gql`
  # This "Todo" type defines the queryable fields for every todo in our data source.
  type Todo {
    id: ID
    summary: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Mutation {
    addTodo(id: ID!, summary: String): Todo
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
    todos: () => todos,
    todo: (parent, args, context, info) => todos.find(todo => todo.id === args.id)
  },
  Mutation: {
    addTodo: async (_, { id, summary }, { }) => {
      todos.push({ id, summary });
      return todos.find(todo => todo.id === id);
    }
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
