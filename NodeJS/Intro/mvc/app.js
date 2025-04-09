const express = require("express");
const connectToDB = require("./config/db");
const productRouter = require("./routes/product");

const app = express();
connectToDB();

//middleware
app.use(express.json());

app.use("/api/products", productRouter);

//default route
app.get("/", (req, res) => {
    res.send("Welcome to our Shop !")
})

app.listen(3000, () => {
  console.log(`The server is running in port 3000`);
});


