import "./App.css";
import Home from "./pages/Home/Home";
import Speisekarte from "./pages/Speisekarte/Speisekarte";
import Kontakt from "./pages/Kontakt/Kontakt";
import Öffnungszeiten from "./pages/Öffnungszeiten/Öffnungszeiten";
import Galerie from "./pages/Galerie/Galerie";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speisekarte" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Öffnungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
