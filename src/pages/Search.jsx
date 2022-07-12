import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../components/Pagination";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`;
  const {
    dataResults: movies,
    error,
    pageId,
    customPagination,
    totalPages,
    categotyMovie,
  } = useMovies(searchWithQueryUrl, query);

  return (
    <div className="content">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h3>
            Resultados para: <span>{query}</span>
          </h3>
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
