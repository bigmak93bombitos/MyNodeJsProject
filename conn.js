const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('postgres', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres'
});