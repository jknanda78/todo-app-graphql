import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";
import { AppProps } from "next/app";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache()
});

const TodoApp: React.FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default TodoApp;
