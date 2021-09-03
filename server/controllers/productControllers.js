import productsModel from "../models/Products.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productsModel.find({});

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productsModel.findById(id);

        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}