import { createContext, useEffect, useState } from "react"
import countriesJSON from "../assets/data.json"

export const CountryContext = createContext()

const CountryContextProvider = (props) => {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filter, setFilter] = useState("")

    const filterAndSearchCountries = () => {
        let filteredCountries = countriesJSON

        if (filter.length > 0) {
            filteredCountries = filteredCountries.filter(country => country.region.toLowerCase() === filter.toLowerCase())
        }

        if (searchTerm.length > 0) {
            filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        if (searchTerm.length === 0 && filter.length === 0) {
            filteredCountries = shuffleArray(countriesJSON).slice(0, 20)
        }

        setCountries(filteredCountries)
    }

    useEffect(() => {
        filterAndSearchCountries()
    }, [searchTerm, filter])

    const shuffleArray = array => {
        let currentIndex = array.length, randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    return (
        <CountryContext.Provider value={{ countries, setSearchTerm, setFilter, filter }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider