const db = require('../provider');
const { DataTypes } = require("sequelize");

const doctorModel = db.define("Doctors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    crm: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    apresentação: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
},
{
    modelName: "doctors"
})

// EXPORTAR O CONTEUDO CRIADO
module.exports = doctorModel;