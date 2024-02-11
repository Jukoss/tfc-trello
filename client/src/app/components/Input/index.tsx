interface CreateBoardProps {
    onBlur: () => void,
    onKeyDown: (event: any) => void,
    name: string,
    placeholder: string,
    autoFocus?: boolean,

};
export const Input = (props: CreateBoardProps) => {
    return (
        <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            {...props}
        />
    );
}