const productsController = {};



const {
  obtenerProductos,
  guardarProducto,
} = require("../services/Productos.service");

productsController.obtenerProductos = async (req, res) => {
  const listaProductos = await obtenerProductos();
  res.json(listaProductos);};

productsController.guardarProducto = async (req, res) => {
  await guardarProducto(req.body);
  res.send("Producto guardado exitosamente");
};



module.exports = productsController;
