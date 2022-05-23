const shopManager = require('./controllers/shop.controller');
const productManager = require('./controllers/product.controller');
const generalManager = require('./controllers/general.controller');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ruta para obtener información de un producto específico.
app.get('/products/:id', productManager.getById);

// Ruta para obtener una única tienda
app.get('/shop', shopManager.getOne);

// Ruta per obtener todos los productos, todas las tiendas i todos los precios
app.get('/all', generalManager.getAll);

// Ruta para recargar los productos de la carpeta
app.get("/reload", generalManager.reloadProducts)

// Iniciar servidor
app.listen(8080, () => {
    console.log("Server is running on port 8080.");

    // Intervalo (1 día) para recargar automáticamente los productos
    // setInterval(() => {
    //     generalManager.reloadProducts();
    // }, 86400000)
})