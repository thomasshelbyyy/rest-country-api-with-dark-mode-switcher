import { Link } from "react-router-dom"
import { useDarkMode } from "../context/DarkModeContext"


const Card = ({ name, population, capital, region, flagUrl }) => {
    const { isDarkMode } = useDarkMode()
    return (
        <Link to={`/detail/${name.toLowerCase()}`} className={`w-72 shadow-lg mt-8 transition duration-200 ${isDarkMode ? "bg-dark-blue text-white" : "bg-white"} hover:scale-110`}>
            <img src={flagUrl} alt={`${name} flag`} className="w-full h-40 rounded-t-md" />
            <div className="px-6 py-10">
                <p className="font-semibold text-lg pb-3">{name}</p>
                <p><span className="font-semibold">Population: </span>{population.toLocaleString()}</p>
                <p><span className="font-semibold">Region: </span>{region}</p>
                <p><span className="font-semibold">Capital: </span>{capital}</p>
            </div>

        </Link>
    )
}

export default Card