const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      product_name: {
        type: String,
        required: true,
      },
      product_price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      isInStock: {
        type: Boolean,
        required: true,
      },
      weight: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  const productModel = mongoose.model("product", productSchema);
  
  module.exports = productModel