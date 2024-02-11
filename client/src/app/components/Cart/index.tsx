interface CartProps {
    id: string;
    title: string;
}

export const Cart = ({ title }: CartProps) => {
    return (
        <div className="flex align-middle max-w-full py-2 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </div> 
    );
}