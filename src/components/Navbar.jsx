import { MoonIcon } from "@heroicons/react/24/outline"
import { MoonIcon as SolidMoonIcon } from "@heroicons/react/16/solid"
import { useDarkMode } from "../context/DarkModeContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    useEffect(() => {
        console.log({ isDarkMode })
    }, [isDarkMode])
    return (
        <nav className={`w-full px-8 py-5 flex justify-between shadow fixed top-0 left-0 z-50 ${isDarkMode ? "bg-dark-blue text-white" : "bg-white"}`}>
            <Link to="/" className="text-xl font-semibold" > Where in the world</Link >
            <button className="flex items-center gap-2" onClick={toggleDarkMode}>
                {isDarkMode ? <SolidMoonIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}

                <p className="font-semibold">Dark Mode</p>
            </button>
        </nav >
    )
}

export default Navbar