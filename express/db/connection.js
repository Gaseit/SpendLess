const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "db",
    user: "admin",
    password: "thos",
    database: "app",
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports=connection;