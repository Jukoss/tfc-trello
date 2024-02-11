import { useAddColumnMutation, useGetBoardByIdQuery } from "@/app/core/types";
import { Column } from "../Column";
import { AddButton } from "../AddButton";

interface BoardViewProps {
    boardId: string,
}

export const BoardView = ({ boardId }: BoardViewProps) => {

    const { data } = useGetBoardByIdQuery({
      variables: {
        id: boardId,
      },    
    });

    console.log("data", data);

    const [createColumn] = useAddColumnMutation();

    const onAddColumn = (title: string) => {
        createColumn({
            variables: {
                title,
                boardId,
                order: 1,
            },
            refetchQueries: ["GetBoardById"],
        });
    }

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full">
            {
                data?.boards_by_pk?.columns.map(({ id, title, carts }) => (
                    <Column key={id} id={id} title={title} carts={carts} />
                ))
            }
            <AddButton
                className="flex h-12 align-middle w-full max-w-full py-2 px-4 bg-white hover:border hover:border-gray-200 rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 tracking-tight text-gray-700 dark:text-white font-medium"
                onAddHandler={onAddColumn}
                title="+ Add column"
            />
        </div>
    );
}