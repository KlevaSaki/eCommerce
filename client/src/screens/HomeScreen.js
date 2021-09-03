import React from 'react'
import "./HomeScreen.css";

import { useEffect } from "react";
import { useDispatch, useSelector  } from 'react-redux';

import Product from "../components/Product.js";
import {getProducts as listProducts} from "../redux/actions/productActions.js";

export default function HomeScreen() {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, error,  loading} = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen" >
            <h2 className="homescreen__title">Products</h2>

            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => ( <Product 
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    price={product.price}
                 /> )) }
            </div>
        </div>
    )
}
