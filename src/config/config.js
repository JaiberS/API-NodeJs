const assert = require("assert");

const { env } = process;

assert.notEqual(env.PORT, undefined);

const config = {
    port: env.PORT
};

module.exports = config;