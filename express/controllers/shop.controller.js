const connection = require('../db/connection');

const shopManager = {};

/**
 * Función para obtener todas las tiendas
 */
shopManager.getAll = async(req, res) => {
    try {
        connection.query("SELECT * FROM shop", (err, results, field) => {
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
 * Función para obtener una tienda a partir de la id
 */
shopManager.getById = async(req, res) => {
    try {
        connection.query("SELECT * FROM shop WHERE id = " + req.params.id, (err, results, field) => {
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

/**
 * Función para obtener una tienda
 */
shopManager.getOne = async(req, res) => {
    try {
        connection.query("SELECT * FROM shop LIMIT 1", (err, results, field) => {
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

module.exports = shopManager;