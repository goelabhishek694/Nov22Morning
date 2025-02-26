import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k",
        },
      };

      const resp = await fetch(url, options);
      const data = await resp.json();
      console.log(data.results);
      
      setMovies(data.results);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      {movies ? (
        <div className="flex justify-evenly flex-wrap gap-8">
          {movies.map((movieObj, idx) => (
            <div
              key={idx}
              className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})` }}
            >
              <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.title}{" "}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Movies;
