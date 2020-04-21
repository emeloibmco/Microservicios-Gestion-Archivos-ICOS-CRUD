'use strict';
const {Pool} = require('pg');

const pool = new Pool({
    user: "admin",
    host: "sl-us-south-1-portal.58.dblayer.com",
    database: "col_db",
    password: "FSRPLZEBOCELLAUG",
    port: 26151//5432
})

module.exports = pool;