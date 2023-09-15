const {Sequelize } = require('sequelize');

const nombreBase = process.env.db_name;
const usuarioBase = process.env.db_user;
const db_clave = process.env.db_clave;

//  parametros de conexion a base de datos
const sequelize = new Sequelize(nombreBase, usuarioBase, db_clave, {
    host:'localhost',
    dialect:'mysql'
});

// conexion de la base de datos con el servidor
const conectarDB = async () => {
    try{
       await sequelize.authenticate();
            console.log('Conexion a la base de datos exitosa');
    } catch( error ){
            console.error('el error de conexion en: '+error);
        }
    }

module.exports = {sequelize , conectarDB}

