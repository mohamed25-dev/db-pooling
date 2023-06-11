const express = require('express');
const { Pool } = require('pg');


const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
};

const app = express();

const pool = new Pool(config);

app.get('/api/without-pool/users', async (req, res) => {
    console.time('without-pool');
    const client = new Pool(config);
    let users = null;

    try {
        await client.connect();
        users = await client.query(`SELECT * FROM users_db.users`);

    } finally {
        res.send(users.rows);
        await client.end();
        console.timeEnd('without-pool');
    }

});

app.get('/api/with-pool/users', async (req, res) => {
    console.time('with-pool');

    console.time('connection');
    const client = await pool.connect();
    console.timeEnd('connection');

    let users = null;

    try {
        users = await client.query(`SELECT * FROM users_db.users`);
        console.log('users', users.rows);
    } finally {
        client.release();
        console.timeEnd('with-pool');
        res.send(users.rows);
    }
});


app.listen(process.env.APP_PORT, () => {
    console.log(`listening on port ${process.env.APP_PORT}`);
});