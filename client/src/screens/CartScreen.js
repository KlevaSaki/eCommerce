import React from 'react';
import "./CartScreen.css";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import CartItem from "../components/CartItem.js";
import {addToCart, removeFromCart} from "../redux/actions/cartActions.js"

export default function CartScreen() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce(( qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? <div> <h1>Your cart is empty</h1> <Link to="/">Go Shopping</Link> </div> : (
                    cartItems.map(item => ( <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>))
                ) }
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}
