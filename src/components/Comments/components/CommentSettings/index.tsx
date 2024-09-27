import { useEffect } from 'react';

export default function CommentSettings() {
    useEffect(() => {
        const dropdownButton = document.getElementById("buttonSettings");
        const dropdownMenu = document.getElementById("settings");

        if (dropdownButton && dropdownMenu) {
            const toggleDropdown = () => {
                dropdownMenu.classList.toggle("hidden");
            };
            dropdownButton.addEventListener("click", toggleDropdown);
            return () => {
                dropdownButton.removeEventListener("click", toggleDropdown);
            };
        }
    }, []);

    return (
        <div className="relative"> {/* Torna este div o contêiner pai com posição relativa */}
            <button id="buttonSettings" data-dropdown-toggle="settings"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
            </button>

            <div id="settings"
                className="hidden absolute right-0 mt-2 z-50 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 "
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Editar</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remover</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reportar</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
