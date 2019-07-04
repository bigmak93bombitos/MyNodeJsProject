const Sequelize = require('sequelize');
const { createModels } = require('./all.models');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('testdb', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
sequelize
  .authenticate()
  .then(db => {
    console.log('Connection has been established successfully.');
    return db;
  })

  

  .then(db => createModels(sequelize))

  .then(async models => {
    const {
       Trainer, 
       Team,
       Player,
       Player_teams
      } = models;
    
    const trainer = await Trainer.create({
      firstname: 'TestTrener', 
      lastname: 'TestTrenerLastName',
      age:20 
    })

    const team = await Team.create({ 
      name: 'TestTeam', 
      color: 'red',
      trainer_id:trainer.id
      // trainer_id:1 
    })

    const player = await Player.create({
      firstname: 'TestPlayer', 
      lastname: 'TestPlayerLastName',
      age:21  
    })

    const player_Teams = await Player_teams.create({ 
      player_id:player.id,
      teams_id:team.id 
    })
});


