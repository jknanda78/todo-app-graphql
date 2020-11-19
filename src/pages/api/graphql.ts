import { ApolloServer, gql } from "apollo-server-micro";
import TodoAPI from "@datasources/todo.ds";

/*
  A schema is a collection of type definitions (hence "typeDefs")
  that together define the "shape" of queries that are executed against
  your data.
*/
const typeDefs = gql`
  # This "Todo" type defines the queryable fields for every todo in our data source.
  type Todo {
    _id: ID
    summary: String
  }

  type Message {
    message: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    todos: [Todo]
    getTodoById(id: ID!): Todo
  }

  type Mutation {
    addTodo(summary: String): Message
    removeTodo(id: ID!): [Todo]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    todos: async (_, __, { dataSources }) => {
      const todos = await dataSources.TodoAPI.todos();
      return todos;
    },
    getTodoById: (parent, args, context, info) => {
      // todos.find(todo => todo.id === args.id)
    }
  },
  Mutation: {
    addTodo: async (_, { summary }, { dataSources }) => {
      const response = await dataSources.TodoAPI.addTodo({ summary });
      return response;
    },
    removeTodo: async (_, { id }, { datasources }) => {
    }
  }
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  dataSources: () => ({
    TodoAPI: new TodoAPI()
  }),
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = server.createHandler({ path: '/api/graphql' });

export default handler;
