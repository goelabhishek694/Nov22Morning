import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies({ pageNo }) {
  const [movies, setMovies] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(data);
  }, []);

  useEffect(() => {
    let controller = new AbortController();
    async function fetchData() {
      try {
        console.log("API call made");
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k",
          },
          signal: controller.signal,
        };

        const resp = await fetch(url, options);
        const data = await resp.json();
        console.log(data.results);

        setMovies(data.results);
      } catch (err) {
        if (err.name == "AbortError") {
          // handle abort()
          alert("Aborted!");
        }
      }
    }
    fetchData();
    return () => {
      //cleanup
      console.log("cleaning up before next api call");
      //abort the request being made
      //abort controller
      controller.abort();
    };
  }, [pageNo]);

  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movie) => {
    const filteredMovies = watchlist.filter(
      (movieObj) => movieObj.id != movie.id
    );
    setWatchlist(filteredMovies);
    localStorage.setItem("watchlist", JSON.stringify(filteredMovies));
  };
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      {movies ? (
        <div className="flex justify-evenly flex-wrap gap-8">
          {movies.map((movieObj, idx) => (
            <MovieCard
              key={idx}
              movieObj={movieObj}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Movies;
