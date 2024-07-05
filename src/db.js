const pg = require('pg');
const config = require('./config/config');

const { user, host, password, database, port } = config.psql;

const pool = new pg.Pool({
    user,
    host,
    password,
    database,
    port
});

exports.modules = pool;