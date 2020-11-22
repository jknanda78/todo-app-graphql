import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import useApolloClient from "@utils/apollo-client";
import "@styles/normalize.css";

const client = useApolloClient();

const TodoApp: React.FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default TodoApp;
