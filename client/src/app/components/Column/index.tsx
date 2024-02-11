import { useAddCartMutation } from "@/app/core/types";
import { AddButton } from "../AddButton";
import { Cart } from "../Cart";

interface Carts {
    __typename?: string,
    createAt: string,
    id: string,
    order: number
    title: string,
}

interface ColumnProps {
    id: string,
    title: string,
    carts: Carts[],
}

export const Column = ({ title, id, carts }: ColumnProps) => {
    
    const [createCart] = useAddCartMutation();

    const onAddCart = (title: string) => {
        createCart({
            variables: {
                columnId: id,
                title,
                order: 1,
            },
            refetchQueries: ["GetBoardById"],
        });
    }

    return (
        <div className="flex flex-col align-middle w-full max-w-full h-full py-2 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="tracking-tight text-gray-900 dark:text-white font-semibold">{title}</h5>
            <div className="mt-3 gap-3 flex flex-col">
                {
                    carts?.map(({ title, id }) => (
                        <Cart key={id} title={title} id={id} />
                    ))
                }
                <AddButton
                    className="flex align-middle w-full max-w-full py-2 px-4 bg-white hover:border hover:border-gray-200 rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 tracking-tight text-gray-700 dark:text-white font-medium"
                    onAddHandler={onAddCart}
                    title="+ Add cart"
                />
            </div>
        </div>    
    );
}