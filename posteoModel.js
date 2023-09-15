const { DataTypes } = require ('sequelize');
const { sequelize } = require('./base.js');

//definimos el modelos de la base de datos
const foroModel = sequelize.define('posteos', {
    id_posteo: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    titulo_posteo: {
        type: DataTypes.STRING,
    },
    posteo:  {
        type: DataTypes.STRING,
    },
    url_posteo: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    tableName: 'posteos'
});

module.exports = foroModel;