const Sequelize = require('sequelize');

  class Team  {
    constructor(connect) {
      this.model = connect.define("team", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
  },
    {
      freezeTableName: true
  });
}
insertRow(teamName,teamColor,trainerId) {
  return this.model.create({
    name: teamName, 
    color: teamColor,
    trainer_id:trainerId
    })
  }
}

  module.exports = {Team};