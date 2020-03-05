import React from 'react';

function Products(props) {
    const products = props.products.map(product => (
        <p>{product.title}<br/>
            {product.description}<br/>
            {product.price}<br/>
            {product.quantity}<br/>
            {product.category_name}<br/>
        </p>
    ));
    return (
        <div className="container">
            {products}
        </div>

    );
}

export default Products;