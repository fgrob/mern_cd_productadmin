import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then( res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.products.map((product, index)=>{
                return (
                    <>
                        <Link key={index} to={`/product/${product._id}`}>
                            <p>{product.title}, {product.price}</p>
                        </Link>
                        <button onClick={(e) => {deleteProduct(product._id)}}>
                            Eliminar
                        </button>
                    </>
                );
            })}
        </div>
    );
};


