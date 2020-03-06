import React, {Component} from "react"
import {Link} from "react-router-dom"


function Products(props) {
    const products = props.products.map(product => {
        const link = `/product/${product.id}`;
        return(
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{product.title}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <Link to={link} type="submit" >More...</Link>
                    </div>
                </div>
            </div>

    );

    })
    return (
        <div className="row">
            {products}
        </div>
    );
}

export default Products;