const shopManager = require('./controllers/shop.controller');
const productManager = require('./controllers/product.controller');
const generalManager = require('./controllers/general.controller');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Ruta per a obtenir informació d'un producte en específic.
app.get('/products/:id', productManager.getById);

// Ruta per a obtenir una sola botiga
app.get('/shop', shopManager.getOne);

// Ruta per obtenir tots els productes, totes les botigues i tots els preus
app.get('/all', generalManager.getAll);

// Ruta per recarregar els productes de la carpeta
app.get("/reload", generalManager.reloadProducts)

// Iniciem el servidor
app.listen(8080, () => {
    console.log("Server is running on port 8080.");

    // Interval per a recarregar automaticament els productes cada dia
    // setInterval(() => {
    //     generalManager.reloadProducts();
    // }, 86400000)
})