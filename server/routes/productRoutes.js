import express from "express";
import { getProducts, getProductById } from "../controllers/productControllers.js";

const router = express.Router();

// route to all products.
router.route("/").get(getProducts);

// route to product by id.
router.route("/:id").get(getProductById)



export default router;