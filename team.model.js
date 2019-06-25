const Sequelize = require('sequelize');

  class Team  {
    constructor(connect) {
      this.model = connect.define("team", {
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
    }
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