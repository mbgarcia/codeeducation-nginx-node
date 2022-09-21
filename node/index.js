const express = require('express')

const mysql = require('mysql')

const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

let connection = mysql.createConnection(config)

const create_table = 'CREATE TABLE IF NOT EXISTS person(`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) not null,   PRIMARY KEY (`id`));'

connection.query(create_table)

let sql = `INSERT INTO person(name) values('Marcelo')` 

connection.query(sql)

sql = 'SELECT * FROM person'

let names = ''

connection.query(sql, (error, results) => {
    if (error) {
        return console.error(error.message);
    }

    names = results.map(c => `<li>${c.name}</li>`).join('')
});

connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full cycle Rocks! </h1>' 
    + '<p>Lista de nomes cadastrada no banco de dados.</p>'
    + '<ul>' + names + '</ul>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})