const showRouter = require("express").Router();
const { addShow, updateShow, deleteShow, getAllShowsByTheatre} = require("../controller/shows");

//add a show
showRouter.post("/", addShow);

//update a show
showRouter.put("/:id", updateShow)

//delete show
showRouter.delete("/:id", deleteShow)

//get all show
showRouter.post("/het-all-shows-by-theatre", getAllShowsByTheatre)

//get all theatres by movie which have some shows
showRouter.post("/get-all-theatres-by-movie", )


module.exports = showRouter;