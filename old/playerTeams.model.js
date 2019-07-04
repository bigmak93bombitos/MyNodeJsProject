const Sequelize = require('sequelize');

    class PlayerTeams  {
      constructor(connect) {
        this.model = connect.define("player_teams", {
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
      }
    });
  }
  insertRow(playerId,teamId) {
    return this.model.create({
      player_id:playerId,
      teams_id:teamId
    })
  }
}

module.exports = {PlayerTeams};