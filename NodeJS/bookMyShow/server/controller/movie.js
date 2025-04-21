const Movie = require("../models/movieModel");

exports.addMovie = async (req, res) => {
    try{
        const movie = req.body;
        const newMovie = new Movie(movie);
        await newMovie.save();
        res.send({
            success: true,
            message: "new movies has been added"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
}