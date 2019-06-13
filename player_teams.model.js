const Sequelize = require('sequelize');

const createPlayer_teams = sequelize => {
    const Model = Sequelize.Model;
  
    class Player_teams extends Model {}
    Player_teams.init({
      // attributes
      player_id: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
      },
      teams_id: {
        type: Sequelize.INTEGER
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
      modelName: 'player_teams'
      // options
    });
    return Player_teams;
  }


  module.exports = {createPlayer_teams};