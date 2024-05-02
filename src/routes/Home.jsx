import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Navbar from "../components/Navbar"
import { useDarkMode } from "../context/DarkModeContext"
import Dropdown from "../components/Dropdown"
import Card from "../components/Card"
import { useContext, useEffect } from "react"
import { CountryContext } from "../context/CountryContext"

const Home = () => {
    const { isDarkMode } = useDarkMode()

    const { countries, setSearchTerm } = useContext(CountryContext)

    useEffect(() => {
        console.log(countries)
    }, [])
    return (
        <>
            <Navbar />
            <div className={`w-full pt-24 h-screen pb-12 px-8 ${isDarkMode ? "bg-very-dark-blue" : "bg-very-light-gray"}`}>
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    <div className={`flex gap-4 px-6 py-3  rounded-md shadow w-full md:w-80 ${isDarkMode ? "bg-dark-blue" : "bg-white"}`}>
                        <MagnifyingGlassIcon className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                        <input type="text" name="search" id="search" placeholder="Search for a country..." className={`focus:outline-none bg-transparent w-full ${isDarkMode ? "placeholder:text-gray-200 text-white" : ""}`} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    <Dropdown />
                </div>

                <div className="w-full flex justify-center md:justify-start gap-8 flex-wrap pt-12">
                    {countries.map(country => (
                        <Card key={country.name} name={country.name} capital={country.capital} flagUrl={country.flags.png} population={country.population} region={country.region} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home