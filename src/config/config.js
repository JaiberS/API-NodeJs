const assert = require("assert");

const { env } = process;

assert.notEqual(env.PORT, undefined);

assert.notEqual(env.PSQLUSER, undefined);
assert.notEqual(env.PSQLHOST, undefined);
assert.notEqual(env.PSQLPASS, undefined);
assert.notEqual(env.PSQLDB, undefined);
assert.notEqual(env.PSQLPORT, undefined);

const config = {
    port: env.PORT,
    psql: {
        user: env.PSQLUSER,
        host: env.PSQLHOST,
        password: env.PSQLPASS,
        database: env.PSQLDB,
        port: env.PSQLPORT
    }
};

module.exports = config;