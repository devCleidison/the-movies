import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";

import Image404 from "../../assets/error.jpg";

import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./style.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

export const Movie = () => {
  const { id } = useParams();
  const movieUrl = `${moviesURL}${id}?${apiKey}`;
  const { dataMovie: movie, error } = useMovies(movieUrl);

  const convertCurrency = (number) => {
    const money = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);

    return money;
  };

  return (
    <>
      {error && <p>{error}</p>}

      {movie && (
        <div className="info-container">
          {movie.poster_path === null ? (
            <img src={Image404} alt="Imagem não encontrada" />
          ) : (
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
          )}

          <div className="info-content">
            <h2>{movie.title}</h2>
            <p className="tagline">{movie.tagline}</p>

            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{convertCurrency(movie.budget)}</p>
            </div>

            <div className="info">
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{convertCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>

            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
