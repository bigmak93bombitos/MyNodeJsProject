const Sequelize = require("sequelize");
const sequelize = new Sequelize('testdb', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


module.exports = sequelize;