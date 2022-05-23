const connection = require('../db/connection');

const productManager = {};

/**
 * Función para obtener todos los productos
 */
productManager.getAll = async(req, res) => {
    try {
        connection.query("SELECT * FROM product;", (err, results, field) => {
            if (err !== null) {
                throw err
            }
            res.json(results)
        })
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

/**
 * Función para obtener un producto a partir de la id
 */
productManager.getById = async(req, res) => {
    try {
        connection.query("SELECT * FROM product WHERE id = " + req.params.id, (err, results, field) => {
            if (err !== null) {
                throw err
            }
            res.json(results)
        })
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

module.exports = productManager;