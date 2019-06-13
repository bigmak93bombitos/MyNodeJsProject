const Sequelize = require('sequelize');

const createPlayer = sequelize => {
    const Model = Sequelize.Model;
  
  class Player extends Model {}
  Player.init({
      // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    age: {
      type: Sequelize.NUMBER
      // allowNull defaults to true
    }, 
    lastname: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    deletedAt: {
      type: Sequelize.DATE,
      
    },
  }, {
    sequelize,
    modelName: 'player',
    freezeTableName: true,
    // options
  });
  return Player;
  }

  module.exports = {createPlayer};