import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Image404 from "../../assets/error.jpg";

import "./style.css";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      {movie.poster_path === null ? (
        <img src={Image404} alt="Image não encontrada" />
      ) : (
        <img src={imageUrl + movie.poster_path} alt={movie.id} />
      )}

      <span className="movie-title">{movie.title}</span>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};
