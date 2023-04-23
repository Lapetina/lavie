const { Sequelize } = require('sequelize');
const settings = require('../settings');


const dbSettings = {
    dbName: settings.dbName,
    dbUser: settings.dbUser,
    dbPassword: settings.dbPassword,
    dbConfig: settings.dbConfig
}

let db = {}
try{
    db = new Sequelize(database=settings.dbName, username=settings.dBUser, password=settings.dbPassword, options=settings.dbConfig);
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
