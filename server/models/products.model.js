const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Debe ingresar un título'],
        minlength: [5, 'El título debe tener al menos 5 caracteres']
    },
    price: { 
        type: Number,
        required: [true, 'Se requiere precio'],
     },
    description: {type: String}
}, {timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);