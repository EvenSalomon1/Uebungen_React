import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Pets from "./pages/Pets/Pets";
import Plants from "./pages/Plants/Plants";
import Work from "./pages/Work/Work";
import SocialMedia from "./pages/Social Media/SocialMedia";
import CodingLife from "./pages/Coding Life/CodingLife";
import Hobbies from "./pages/Hobbies/Hobbies";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/0" element={<Pets />} />
          <Route path="/blog/1" element={<Plants />} />
          <Route path="/blog/2" element={<Work />} />
          <Route path="/blog/3" element={<Hobbies />} />
          <Route path="/blog/4" element={<SocialMedia />} />
          <Route path="/blog/5" element={<CodingLife />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
