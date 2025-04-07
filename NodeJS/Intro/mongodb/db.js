const mongoose = require("mongoose");
const url =
  "mongodb+srv://goelabhishek694:novmorning@cluster0.manaotv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToDB = async () => {
  try {
    let connection = await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

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

module.exports = {
    connectToDB,
    productModel
}