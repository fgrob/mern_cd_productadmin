import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        // e.preventDefault();
        axios.post('http://localhost:8000/api/crear', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    }


return (
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Título</label><br/>
            <input type="text" onChange = {(e) => setTitle(e.target.value)} value={title} />
        </p>
        <p>
            <label>Precio</label><br/>
            <input type="number" onChange = {(e) => setPrice(e.target.value)} value={price} />
        </p>
        <p>
            <label>Descripción</label><br/>
            <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description} />
        </p>
        <input type="submit" />
    </form>
)

}
