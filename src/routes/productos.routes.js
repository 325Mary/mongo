const { Router } = require("express");
const router = Router();


const {
  obtenerProductos,
  guardarProducto,
  eliminarProductoPorId,
} = require("../controller/productos.controller");

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.get("/getAllProduct", obtenerProductos);
router.post("/saveNewProduct", guardarProducto);

module.exports = router;
