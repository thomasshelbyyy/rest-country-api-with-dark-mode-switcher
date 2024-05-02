import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import { DarkModeProvider } from "./context/DarkModeContext"
import CountryContextProvider from "./context/CountryContext"

function App() {

  return (
    <DarkModeProvider>
      <CountryContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:countryName" element={<Detail />} />
          </Routes>
        </Router>
      </CountryContextProvider>
    </DarkModeProvider>
  )
}

export default App
