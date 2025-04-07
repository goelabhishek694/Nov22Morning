const express = require("express");
const { connectToDB, productModel } = require("./db.js");
const app = express();
connectToDB();

app.use(express.json());
app.listen(3000, () => {
  console.log(`The server is running in port 3000`);
});

app.post("/api/products", async (req, res) => {
  const body = req.body;
  const product = await productModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    category: body.category,
    isInStock: body.isInStock,
    weight: body.weight,
  });

  console.log(product);
  return res.json({
    message: "Product created",
    data: product,
  });
});

app.get("/api/products", async (req, res) => {
    const query = req.query; 
    // if(query.sort){
    //     htl -> desc 
    //     b-a
    //     lth -> asc 
    //     a-b
    // }
    console.log(query);  
  const allProducts = await productModel.find(query);
  console.log(allProducts);
  return res.json({
    message: "Product retrieved",
    data: allProducts,
  });
});

//get a single product
app.get("/api/products/:id", async (req, res) => {
  const pid = req.params.id;
  const product = await productModel.find({ _id: pid });
  // const product = await productModel.findById(pid);
  console.log(product);
  return res.json({
    message: "Product retrieved",
    data: product,
  });
});

app.put("/api/products/:id", async (req, res) => {
  const pid = req.params.id;
  const dataToBeUpdated = req.body;
  const product = await productModel.findByIdAndUpdate(pid, dataToBeUpdated, {
    returnDocument: "after",
    upsert: true,
  });
  return res.json({
    message: "Product updated",
    data: product,
  });
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const pid = req.params.id;
    let product = await productModel.findByIdAndDelete(pid);
    console.log(product);
    if (product) {
      return res.json({
        message: "Product deleted",
      });
    } else {
      return res.status(400).json({
        message: "Product does not exist",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
