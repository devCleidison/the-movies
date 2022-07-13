import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

import "./style.css";

export const Navbar = ({ handleMenu }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`search?q=${search}`);
    setSearch("");
    handleMenu();
  };
  return (
    <nav>
      <Link to="/" onClick={handleMenu}>
        Home
      </Link>
      <Link to="/top-rated" onClick={handleMenu}>
        Top Movies
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button id="btn-search">
          <HiOutlineSearch />
        </button>
      </form>
    </nav>
  );
};
