import express from "express";
import Product from "../Model/product.js";

let router = express.Router();

//Add new Product
router.post("/add-new-product", async (req, res) => {
  try {
    //Add new Product to DB
    await new Product({
      name: req.body.name,
      productType: req.body.productType,
      productDesp: req.body.productDesp,
      img: req.body.img,
      price: req.body.price,
      discountType: req.body.discountType,
      discountValue: req.body.discountValue,
    }).save();

    res.status(200).json({ message: "Product Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Get all Products
router.get("/get-all-products", async (req, res) => {
  try {
    let product = await Product.find();
    let flat_prod=product.filter((val)=>val.discountType=="Flat");
    let percentage_prod=product.filter((val)=>val.discountType=="Percentage");
    let combo_prod=product.filter((val)=>val.discountType=="Combo");

    let products={
      flat_prod,
      percentage_prod,
      combo_prod,
      all_products:product
    }

    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Get Product by Type
router.get("/get-product-by-type", async (req, res) => {
  try {
    let type = req.headers["type"];
    let products = await Product.aggregate([
      {
        $match: { productType: type },
      },
    ]);

    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const productRouter = router;
