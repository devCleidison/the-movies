import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;
const searchURL = import.meta.env.VITE_SEARCH;

export const useMovies = (url, category) => {
  const [dataResults, setDataResults] = useState([]);
  const [dataMovie, setDataMovie] = useState(null);
  const [pageId, setPageId] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [error, setError] = useState("");
  const [categotyMovie, setCategoryMovie] = useState("");

  const customPagination = async (page, pageCategory) => {
    let customPaginationUrl = null;
    let res = null;
    let data = null;

    if (pageCategory === "popular") {
      customPaginationUrl = `${moviesURL}${category}?${apiKey}&page=${page}`;
    } else if (pageCategory === "top") {
      customPaginationUrl = `${moviesURL}top_rated?${apiKey}&page=${page}`;
    } else {
      customPaginationUrl = `${searchURL}?${apiKey}&query=${pageCategory}&page=${page}`;
    }

    res = await fetch(customPaginationUrl);
    data = await res.json();

    setDataResults(data.results);
    setPageId(data.page);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setDataMovie(data);
        setDataResults(data.results);
        setPageId(data.page);
        setTotalPages(data.total_pages);
        setCategoryMovie(category);
      } catch (err) {
        setError("Houve um erro ao buscar os dados");
      }
    };

    fetchData();
  }, [url]);

  return {
    dataResults,
    error,
    dataMovie,
    pageId,
    totalPages,
    categotyMovie,
    customPagination,
  };
};
