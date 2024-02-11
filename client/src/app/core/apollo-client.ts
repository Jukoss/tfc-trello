import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql', // Replace with your API URL
  cache: new InMemoryCache(),
});
