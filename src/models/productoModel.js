const { Schema, model} = require('mongoose');

const ProductoSchema = new Schema ({
    

NomProducto: String,
Valor: Number,
Descripcion: String,
Disponibilidad: Boolean,
storeId: Number


}, { versionKey: false })



module.exports = model("producto", ProductoSchema, "Productos")