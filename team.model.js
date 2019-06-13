const Sequelize = require('sequelize');

const createTeam = sequelize => {
    const Model = Sequelize.Model;
  
    class Team extends Model {}
    Team.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // attributes
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING
        // allowNull defaults to true
      },
      trainer_id: {
        type: Sequelize.INTEGER
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
          // options
      sequelize,
      modelName: 'team',
      freezeTableName: true,
    });
    return Team;
  }

     module.exports = {createTeam};