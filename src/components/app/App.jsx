import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Product from "../product/Product"

import Footer from "../footer/Footer";
import Navigation from "../nav/Nav"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Orders from "../orders/Orders"

export function App() {
    return(
        <div className="container">
        <Header/>
        <Navigation/>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/home">
                            <Main/>
                        </Route>
                        <Route path="/orders/:id" component={Orders}/>
                        <Route path="/product/:id" component={Product}/>
                    </Switch>
                </div>
            </Router>

            <Footer/>
        </div>
    );

}

export default App;