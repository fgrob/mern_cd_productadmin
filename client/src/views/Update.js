import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default props => {
    const { id } = useParams()
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/product/edit/' + id, {
            title,
            price,
            description
        })
            .then( res => console.log(res));
    }
    return (
        <div>
            <h1>Actualizar producto</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Título</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Precio</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Descripción</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}