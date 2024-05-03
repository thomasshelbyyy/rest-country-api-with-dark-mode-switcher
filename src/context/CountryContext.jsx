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

    const shuffleArray = (array) => {
        const newArray = [...array]; // Salin array untuk menghindari modifikasi array asli
        for (let i = newArray.length - 1; i > 0; i--) {
            // Generate indeks acak dari 0 ke i
            const randomIndex = Math.floor(Math.random() * (i + 1));
            // Tukar elemen di indeks i dengan elemen di indeks acak
            [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
        }
        return newArray;
    };

    return (
        <CountryContext.Provider value={{ countries, setSearchTerm, setFilter, filter }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider