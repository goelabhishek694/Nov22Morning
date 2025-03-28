import React, { useEffect, useState, useContext, useRef } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/MovieContext";
function Movies({}) {
  const { watchlist, setWatchlist, handleAddWatchlist, removeFromWatchlist } =
    useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(data);
  }, []);

  const fetchMovies = async (pageNo) => {
    try {
      setLoading(true);
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k",
        }
      };
      const resp = await fetch(url, options);
      const data = await resp.json();
        console.log(data.results);

        setMovies(prev => [...prev, ...data.results]);
        setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(pageNo);
  }, [pageNo]);

  // useEffect(() => {
  //   let controller = new AbortController();
  //   async function fetchData() {
  //     try {
  //       console.log("API call made");
  //       const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`;
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k",
  //         },
  //         signal: controller.signal,
  //       };

  //       const resp = await fetch(url, options);
  //       const data = await resp.json();
  //       console.log(data.results);

  //       setMovies(data.results);
  //     } catch (err) {
  //       if (err.name == "AbortError") {
  //         // handle abort()
  //         alert("Aborted!");
  //       }
  //     }
  //   }
  //   fetchData();
  //   return () => {
  //     //cleanup
  //     console.log("cleaning up before next api call");
  //     //abort the request being made
  //     //abort controller
  //     controller.abort();
  //   };
  // }, [pageNo]);
  
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if(entries[0].isIntersecting && !loading){
      setPageNo(prev => prev+1);
    }
  }, {threshold: 1.0});

  const currentObserverTarget = observerTarget.current;
  if(currentObserverTarget){
    observer.observe(currentObserverTarget);
  }

  return () => {
    if(currentObserverTarget){
      observer.unobserve(currentObserverTarget);
    }
  }
}, [loading])
  
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movie</h1>
      </div>
        <div className="flex justify-evenly flex-wrap gap-8">
          {movies.map((movieObj, idx) => (
            <MovieCard
              key={idx}
              movieObj={movieObj}
              addToWatchlist={handleAddWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          ))}
        </div>
      <div ref = {observerTarget} className="h-10 flex items-center justify-center my-4">
        {loading && <p>Loading more movies...</p>}
      </div>
    </div>
  );
}

export default Movies;
