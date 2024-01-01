import mongoose from "mongoose";

export function dbConnection() {
  try {
    mongoose.connect(
      "mongodb+srv://rajesh:rajesh145@cluster0.563jw0h.mongodb.net/Shopping_App?retryWrites=true&w=majority"
    );
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error connecting DB ----", error);
  }
}
