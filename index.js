const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
    const name = "Henrique Antonio Buzin Vargas";
    connection.query(`INSERT INTO people (name) VALUES (?)`, [name], (err) => {
        if (err) throw err;
        connection.query('SELECT name FROM people', (err, results) => {
            if (err) throw err;
            res.send('<h1>Full Cycle Rocks!</h1>' + results.map(p => `<p>- ${p.name}</p>`).join(''));
        });
    });
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
