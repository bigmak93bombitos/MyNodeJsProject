const Sequelize = require('sequelize');

class Trainer  {
  constructor(connect) {
    this.model = connect.define("trainers", {
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
      }
    });
  }
    insertRow(firstNameRow,lastNameRow,ageRow) {
      return this.model.create({
        firstname: firstNameRow, 
        lastname: lastNameRow,
        age:ageRow
      })
    }
  }

module.exports = {Trainer};
