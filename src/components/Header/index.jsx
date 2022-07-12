import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { Navbar } from "../Navbar";

import "./style.css";

export const Header = ({ handleMenu }) => {
  return (
    <header>
      <div className="container header-container">
        <button id="btn-menu" onClick={handleMenu}>
          <HiOutlineMenuAlt2 />
        </button>

        <Link to="/">
          <h2>The Movies</h2>
        </Link>

        <Navbar handleMenu={handleMenu} />
      </div>
    </header>
  );
};
