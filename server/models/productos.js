const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productosSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'La categoria es obligatoria']

    },
    precio: {
        type: String,
        required: [true, 'El precio es obligatorio']
    },
    disponibilidad: {
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El usuario es obligatorio']

    }
});

module.exports = mongoose.model('Productos', productosSchema);