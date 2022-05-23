const connection = require('../db/connection');

const priceManager = {};

/**
 * Función para obtener todos los precios
 */
priceManager.getAll = async(req, res) => {
    try {
        connection.query("SELECT * FROM price;", (err, results, field) => {
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

module.exports = priceManager;