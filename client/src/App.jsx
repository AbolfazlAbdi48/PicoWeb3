import { Route, Routes, useLocation } from "react-router-dom";
import { Home, CryptoList, TransactionsList, CryptoDetail } from "./Pages";
import { Intro, Navbar } from "./Components";

const App = () => {
  const { pathname } = useLocation()
  const introGradient = pathname == "/" ? "gradient-bg-welcome" : "gradient-bg-services"

  return (
    <section className="min-h-screen">
      <section className={introGradient}>
        <Navbar />
        {
          pathname == '/' && <Intro />
        }
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<CryptoList />} />
        <Route path="/crypto/:coinId" element={<CryptoDetail />} />
        <Route path="/transactions" element={<TransactionsList />} />
      </Routes>

    </section>
  )
}

export default App;
