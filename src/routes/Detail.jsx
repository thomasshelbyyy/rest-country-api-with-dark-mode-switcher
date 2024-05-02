import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Navbar from "../components/Navbar"
import { useDarkMode } from "../context/DarkModeContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import allCountries from "../assets/data.json"

const Detail = () => {
    const { countryName } = useParams()
    const { isDarkMode } = useDarkMode()
    const [country, setCountry] = useState(null)
    const [borders, setBorders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const currentCountry = allCountries.find(ctr => ctr.name.toLowerCase() === countryName)
        setCountry(currentCountry)
        const borderNames = currentCountry.borders ? currentCountry.borders.map(border => {
            const foundBorderCountry = allCountries.find(ctr => ctr.alpha3Code === border)
            return foundBorderCountry.name
        }) : []
        setBorders(borderNames)
    }, [countryName])
    return (
        <>
            <Navbar />
            <div className={`w-full pt-24 h-screen pb-12 px-8 ${isDarkMode ? "bg-very-dark-blue" : "bg-very-light-gray"}`}>
                <button className={`flex items-center px-5 py-2 gap-2 rounded-md shadow ${isDarkMode ? "bg-dark-blue text-white" : "bg-white"}`} onClick={() => navigate(-1)}>
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Back</span>
                </button>

                <div className="flex flex-col md:flex-row justify-between pt-20 gap-16">
                    <img src={country && country.flags.png} alt={`${country && country.name} flag`} className="w-full md:w-2/5 h-fit" />
                    <div className={`w-full md:w-2/5 flex flex-col justify-around ${isDarkMode ? "text-white" : "text-black"}`}>
                        <h1 className="text-2xl font-bold pb-3">{country && country.name}</h1>
                        <div className="flex flex-col md:flex-row gap-4 justify-between pb-3">
                            <div>
                                <p><span className="font-semibold pb-1">Native Name: </span>{country && country.name}</p>
                                <p><span className="font-semibold pb-1">Population: </span>{country && country.population.toLocaleString()}</p>
                                <p><span className="font-semibold pb-1">Region: </span>{country && country.region}</p>
                                <p><span className="font-semibold pb-1">Sub Region: </span>{country && country.subregion}</p>
                                <p><span className="font-semibold pb-1">Capital: </span>{country && country.capital}</p>

                            </div>
                            <div>
                                <p><span className="font-semibold pb-1">Top Level Domain: </span>{country && country.topLevelDomain[0]}</p>
                                <p><span className="font-semibold pb-1">Currencies: </span>{country && country.currencies.map(currency => <span key={currency.name} className="pr-1">{currency.name}</span>)}</p>
                                <p><span className="font-semibold pb-1">Languages: </span>{country && country.languages.map(lang => <span key={lang.name} className="pr-1">{lang.name}</span>)}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className={`w-fit ${isDarkMode ? "text-white" : "text-black"}`}>Border Countries: </p>
                            <div className="flex flex-wrap gap-2">
                                {borders.length > 0 ? borders.map(border => (
                                    <Link to={`/detail/${border.toLowerCase()}`} className={`px-4 py-1 rounded-md h-fit shadow ${isDarkMode ? "bg-dark-blue text-white" : "bg-white"}`} key={border}>{border}</Link>
                                )) : <span>n/a</span>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Detail