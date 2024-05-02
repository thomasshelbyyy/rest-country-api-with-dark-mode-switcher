import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { CountryContext } from '../context/CountryContext';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { isDarkMode } = useDarkMode()

    const { setFilter, filter } = useContext(CountryContext)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = region => {
        if (region === "all region") {
            setFilter("")
        } else {
            setFilter(region)
        }
        setIsOpen(false)
    }

    return (
        <div className="relative font-semibold">
            <button
                onClick={toggleDropdown}
                className={`flex items-center gap-3 px-4 py-2 shadow rounded-md focus:outline-none ${isDarkMode ? "bg-dark-blue text-white" : "text-gray-700 bg-white"}`}
            >
                <span>Filter By Region</span>
                <ChevronDownIcon className='w-5 h-5' />
            </button>
            {isOpen && (
                <div className={`absolute w-full right-0 mt-2 rounded-md shadow-lg ${isDarkMode ? "bg-dark-blue text-white" : "bg-white text-gray-700"}`}>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("all region")}
                    >
                        All Region
                    </button>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("africa")}
                    >
                        Africa
                    </button>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("americas")}
                    >
                        America
                    </button>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("asia")}
                    >
                        Asia
                    </button>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("europe")}
                    >
                        Europe
                    </button>
                    <button
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-gray-700"} `}
                        onClick={() => handleClick("oceania")}
                    >
                        Oceania
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
