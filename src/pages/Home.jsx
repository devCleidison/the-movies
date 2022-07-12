import { useMovies } from "../hooks/useMovies";

import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
  const popularURL = `${moviesURL}popular?${apiKey}`;
  const {
    dataResults: movies,
    error,
    pageId,
    totalPages,
    categotyMovie,
    customPagination,
  } = useMovies(popularURL, "popular");

  return (
    <div className="content">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h3>Mais populares</h3>
          <div className="content-movies">
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
          {movies && (
            <Pagination
              pageId={pageId}
              customPagination={customPagination}
              totalPages={totalPages}
              categotyMovie={categotyMovie}
            />
          )}
        </>
      )}
    </div>
  );
};
