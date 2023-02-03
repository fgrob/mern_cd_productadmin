import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

export default () => {
    const [product, setProduct ] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
            .catch(err => {console.log(err)})
    }, [])
    return (
        <div>
            <p>Título: {product.title}</p>
            <p>Precio: {product.price}</p>
            <p>Descripción: {product.description}</p>
            <Link to={"/product/edit/" + product._id}>
                Editar
            </Link>
        </div>
    )
}
