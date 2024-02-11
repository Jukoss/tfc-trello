import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-gray-100 mb-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TFC-Trello</span>
                </Link>
            </div>
        </nav>
    );
}