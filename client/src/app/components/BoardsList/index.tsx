import { useAddBoardMutation, useGetBoardsQuery } from "@/app/core/types";
import { BoardCard } from "../BoardCard";
import { AddButton } from "../AddButton";

export const BoardsList = () => {
    const { data } = useGetBoardsQuery();
    const [createBoard] = useAddBoardMutation();

    const onAddBoard = (title: string) => {
        createBoard({
            variables: {
                title,
            },
            refetchQueries: ["GetBoards"],
        });
    }

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {
                data?.boards.map(({ id, title }) => (
                    <BoardCard key={title} id={id} title={title} />
                ))
            }
            <AddButton
                className="flex w-full align-middle h-24 max-w-full p-6 bg-white hover:border hover:border-gray-200 rounded-lg hover:shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-2xl font-bold tracking-tight text-gray-700 dark:text-white"
                onAddHandler={onAddBoard}
                title="+ Add board"
            />
        </div>
    );
}