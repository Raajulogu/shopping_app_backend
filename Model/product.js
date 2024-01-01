import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  productDesp: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
  },
  discountValue: {
    type: String,
    required: true,
  },
});

let Product = mongoose.model("Product", productSchema);
export default Product;
