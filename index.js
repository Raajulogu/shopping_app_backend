import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./db.js";
import { productRouter } from "./Routes/product.js";

//Configure env
dotenv.config();

let app = express();
let PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//db connection
dbConnection();

//route
app.use('/api',productRouter)

//server connection
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
