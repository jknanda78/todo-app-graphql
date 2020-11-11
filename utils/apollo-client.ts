import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql"
    }),
    cache: new InMemoryCache()
  });
};

const initializeApolloClient = () => {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
};

const useApolloClient = () => {
  return initializeApolloClient();
};

export default useApolloClient;
