"use client"
import { BoardView } from "@/app/components/BoardView";
import { client } from "@/app/core/apollo-client";
import { useGetBoardByIdQuery, useGetBoardsQuery } from "@/app/core/types";
import { ApolloProvider } from "@apollo/client";

interface PageParams {
    id: string;
}

interface PageParams {
    params: PageParams;
}

export default function Board(props: PageParams){

    return (
    <ApolloProvider client={client}>
        <BoardView boardId={props.params.id} />
    </ApolloProvider>

    );
}