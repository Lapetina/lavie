// const { Settings, DbConfig } = require('./interfaces/settings');

const dbConfig = {
    dialect: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
}

const settings = {
    servicePort: process.env.SERVICE_PORT || 3001,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.PASSWORD,
    dbConfig: dbConfig,
};

module.exports = settings;