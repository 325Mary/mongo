const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Prueba', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => {
  console.log("Conexión existosa");
})
.catch((error) => {
  console.error("No se pudo conectar a la base de datos: " + error);
});

