import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import CryptoList from "./Pages/CryptoList";
import { Navbar } from "./Components";

const App = () => {
  return (
    <section className="min-h-screen">
      <section className="gradient-bg-welcome">
        <Navbar />
        {/* Intro component */}
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<CryptoList />} />
      </Routes>

    </section>
  )
}

export default App;
