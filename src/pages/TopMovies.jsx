import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const TopMovies = () => {
  const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
  const {
    dataResults: movies,
    error,
    pageId,
    totalPages,
    categotyMovie,
    customPagination,
  } = useMovies(topRatedUrl, "top");

  return (
    <div className="content">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h3>Melhores avaliados</h3>
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
