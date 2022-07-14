import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Movie } from "./pages/Movie";
import { TopMovies } from "./pages/TopMovies";

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenu = () => {
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");

    if (body.offsetWidth > 990) return;

    if (isShowMenu) {
      body.style.overflow = "initial";
      nav.classList.remove("show");
      setIsShowMenu(false);
    } else {
      body.style.overflow = "hidden";
      nav.classList.add("show");
      setIsShowMenu(true);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header handleMenu={handleMenu} />
        <main>
          <section className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/top-rated" element={<TopMovies />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
