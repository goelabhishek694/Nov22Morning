const movieRouter = require("express").Router();
const { addMovie } = require("../controller/movie");

//add a movie
movieRouter.post("/", addMovie);


module.exports = movieRouter;