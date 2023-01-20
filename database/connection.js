const knex = require('knex');
require('dotenv').config()

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.DB_PORT,
        password: process.env.PASSWORD,
        database: process.env.DB
    } 
    // connection: process.env.DATABASE
})

module.exports = db;