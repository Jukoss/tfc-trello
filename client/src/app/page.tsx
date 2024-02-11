"use client"
import { ApolloProvider } from "@apollo/client";
import { client } from "./core/apollo-client";
import { BoardsList } from "./components/BoardsList";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <BoardsList /> 
    </ApolloProvider>
  );
}
