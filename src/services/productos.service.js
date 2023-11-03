const ProductoSchema = require("../models/productoModel");

const obtenerProductos = async() => {
    return await ProductoSchema. find();
};

const guardarProducto = async (producto) => {
    let nuevoProducto = new ProductoSchema(producto);
    return await nuevoProducto.save()
};



module.exports = { obtenerProductos, guardarProducto }