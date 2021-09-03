import dotenv from "dotenv";
import productsModel from "./models/Products.js"
import mongoose from "mongoose";
import productsData from "./data/products.js";

dotenv.config();

const MONGO_URL = process.env.CONNECTION_URL;

const importData = async () =>{
    try {
        await productsModel.deleteMany()

        await productsModel.insertMany(productsData);

        console.log("Data import successfull");

        process.exit();
    } catch (error) {
        console.error("Error importing data");

        process.exit(1);
    }
}


mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Importing data to MongoDB!")
    importData()
})