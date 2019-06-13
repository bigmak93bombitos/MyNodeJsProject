const Sequelize = require('sequelize');
const { createTrainer } = require('./trainers.model');
const { createTeam } = require('./team.model');
const { createPlayer } = require('./player.model');
const { createPlayer_teams } = require('./player_teams.model');
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

  .then(async db => {

    const Trainer = await createTrainer(sequelize);
    const Team = await createTeam(sequelize);
    const Player = await createPlayer(sequelize);
    const Player_teams = await createPlayer_teams(sequelize);

    Trainer.hasMany(Team, 
        {
          foreignKey:'trainer_id', 
          sourceKey: 'id'
        })
      
       Team.belongsToMany(Player, 
        {
          through: 
          Player_teams, 
          foreignKey: 'teams_id', 
          sourceKey: 'id'
        })
      
       Player.belongsToMany(Team, 
        {
          through: Player_teams, 
          foreignKey: 'player_id', 
          sourceKey: 'id'
        })
    
    const trainer = await Trainer.create({
      firstname: 'TestTrener', 
      lastname: 'TestTrenerLastName',
      age:20 
    })

    const team = await Team.create({ 
      name: 'TestTeam', 
      color: 'red',
      trainer_id:trainer.id
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


