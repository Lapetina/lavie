import settings from './settings';
const Sequelize = require("sequelize")

/*
const DB_NAME = "laviemain";
const DB_USER = "root";
const DB_PASSWORD = "Nic22@";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
}
*/

const db_settings = {
    dbName: settings.dbName,
    dbUser: settings.dbUser,
    dbPassword: settings.dbPassword,
    dbConfig: settings.dbConfig
}

try{
    db = new Sequelize(db_settings);
} catch (error) {
    console.log(error);
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectados!");
    } catch(error){
            console.error("erro ao tentar se conectar com o banco de dados")
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;
