const express = require("express");
const {connectToDB, productModel} = require("./db.js");
const app = express();
connectToDB();


app.use(express.json());
app.listen(3000, () => {
    console.log(`The server is running in port 3000`);
  });

app.post("/api/products", async(req, res) => {
    const body = req.body;
    const product = await productModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
        weight: body.weight
    });

    console.log(product);
    return res.json({
        message: "Product created",
        data: product
    })
    
})
  