export function SideBar() {
    return (
        <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-xl font-bold">My App</h1>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}