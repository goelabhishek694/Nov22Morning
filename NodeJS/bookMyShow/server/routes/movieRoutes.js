const movieRouter = require("express").Router();
const { addMovie, getAllMovies, updateMovie, deleteMovie} = require("../controller/movie");

//add a movie
movieRouter.post("/", addMovie);

//get all movies
movieRouter.get("/", getAllMovies)

//update a movie
movieRouter.put("/:id", updateMovie)

//delete movie
movieRouter.delete("/:id", deleteMovie)

module.exports = movieRouter;