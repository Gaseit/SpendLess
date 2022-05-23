const connection = require('../db/connection');
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const generalManager = {};

/**
 * Función para obtener los productos, precios i tiendas
 */
generalManager.getAll = async(req, res) => {
    try {
        connection.query("SELECT * FROM product;", (err, results, field) => {
            if (err !== null) {
                throw err
            }

            let products = results;
            connection.query("SELECT * FROM price;", (err, results, field) => {
                if (err !== null) {
                    throw err
                }

                let prices = results;
                connection.query("SELECT * FROM shop;", (err, results, field) => {
                    if (err !== null) {
                        throw err
                    }

                    res.json({
                        prices: prices,
                        products: products,
                        shops: results
                    })
                })
            })
        })
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

/**
 * Funció per a recarregar els productes de la carpeta
 */
generalManager.reloadProducts = (req, res) => {
    let products_path = path.join(__dirname, "../products");
    fs.promises.readdir(products_path)
        .then((folders) => {
            for (let shop of folders) {
                let shop_id = -1;
                connection.execute(`SELECT id FROM shop WHERE name = '${shop}'`, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    if (result && result.length > 0) {
                        connection.execute(`DELETE
                                            FROM price
                                            WHERE shop_id = '${result[0].id}'`);
                        connection.execute(`DELETE
                                            FROM shop
                                            WHERE id = '${result[0].id}'`);
                    }
                    connection.execute(`INSERT 
                                            INTO shop
                                            VALUES (null, '${shop}')`);
                    connection.execute(`SELECT LAST_INSERT_ID() as id`, (err, result) => {
                        shop_id = result[0].id;
                    });
                    fs.promises.readdir(path.join(products_path, shop))
                        .then((files) => {
                            for (let f of files) {
                                let file_path = path.join(products_path, shop, f);
                                fs.createReadStream(file_path)
                                    .pipe(csv())
                                    .on('data', (row) => {
                                        let product_id = -1;
                                        connection.execute(`SELECT id FROM product WHERE name = '${row.name}'`, (err, result) => {
                                            if (result && result.length > 0) {
                                                product_id = result[0].id;
                                            } else {
                                                connection.execute(`INSERT INTO products VALUES (null, ${row.name}, ${row.image})`)
                                                connection.execute(`SELECT LAST_INSERT_ID() as id`, (err, result) => {
                                                    product_id = result[0].id;
                                                });
                                            }
                                            connection.execute(`INSERT INTO price VALUES (null, '${shop_id}', '${product_id}', ${row.price.replaceAll(',', '.')})`);
                                        })
                                    })
                                    .on('end', () => {
                                        console.log("Reloaded Data")
                                    });
                            }
                        })
                })
            }
            res.send("A");
        })
}

module.exports = generalManager;