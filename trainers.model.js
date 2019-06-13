const Sequelize = require('sequelize');

// class Trainer{
//   sequelize;
//   constructor 
// }
const createTrainer = sequelize => {  
  const Model = Sequelize.Model;


  class Trainers extends Model {}
  Trainers.init({
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
    modelName: 'trainers'
    // options
  });
  
  return Trainers;
}

    module.exports = {createTrainer};