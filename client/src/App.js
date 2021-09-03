import "./index.css";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//screens
import HomeScreen from "./screens/HomeScreen.js"
import ProductScreen from "./screens/ProductScreen.js"
import CartScreen from "./screens/CartScreen.js"

//components
import Navbar from "./components/Navbar.js";
import Backdrop from "./components/Backdrop.js";
import SideDrawer from "./components/SideDrawer.js";

export default function App() {
    const [sideToggle, setSideToggle] = useState(false);

    return (
        <Router>
            <Navbar click={() => setSideToggle(true)}/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <main>
                <Switch>
                    <Route exact path="/" component={HomeScreen}></Route>
                    <Route exact path="/product/:id" component={ProductScreen}></Route>
                    <Route exact path="/cart" component={CartScreen}></Route>
                </Switch>
            </main>
        </Router>
    )
}
