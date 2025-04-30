const bookingRouter = require("express").Router();
const { addMovie, getAllMovies, updateMovie, deleteMovie, movieById} = require("../controller/movie");

//add a booking
bookingRouter.post("/make-payment", makePayment);

//get all booking
bookingRouter.get("/book-show", getAllMovies)

//update a booking
bookingRouter.put("/get-all-bookings", updateMovie)


module.exports = bookingRouter;