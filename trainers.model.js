// const Model = require('sequelize').Model
// class Trainer extends Model{}
  
//     constructor(sequelize) 
//     {
//       super ();
//   this.init({
//     // attributes
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstname: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     lastname: {
//       type: Sequelize.STRING
//       // allowNull defaults to true
//     },
//     age: {
//       type: Sequelize.NUMBER
//       // allowNull defaults to true
//     }, 
//     createdAt: {
//       type: Sequelize.DATE,
//       allowNull: true
//     },
//     updatedAt: {
//       type: Sequelize.DATE,
//       allowNull: true
//     },
//     deletedAt: {
//       type: Sequelize.DATE,
      
//     },
//   }, {
//     sequelize,
//     modelName: 'trainers'
//     // options

//   });
//   return this;
//   }



    // module.exports = {Trainer};

// const Model = require('sequelize').Model
var Sequelize = require('sequelize');
var sequelize = require('./config.db.js'); //sequelize instance

// // class Trainer extends Model {}
// // constructor(sequelize) 

const Trainer = sequelize.define("trainers", {
  // Trainer.init({
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
  // },  {
  // sequelize,
  // modelName: "trainers"
});

// Trainer.create({
//     firstname: 'TestTrener', 
//     lastname: 'TestTrenerLastName',
//     age:20
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));



module.exports = {Trainer};
//  exports.Trainer = Trainer;
 // module.exports.Trainer;