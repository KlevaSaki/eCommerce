import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productsRoutes from "./routes/productRoutes.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productsRoutes)

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.CONNECTION_URL;


mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch(error => console.log(error));
