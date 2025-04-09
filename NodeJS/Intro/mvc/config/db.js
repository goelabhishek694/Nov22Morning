const mongoose = require("mongoose");
const url =
  "mongodb+srv://goelabhishek694:novmorning@cluster0.manaotv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToDB = async () => {
  try {
    let connection = await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectToDB;