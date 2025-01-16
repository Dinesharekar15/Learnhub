require('dotenv').config();

const { Pool } = require('pg');


const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    host: process.env.HOST,
    database: process.env.DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
});




module.exports = { db: pool };
