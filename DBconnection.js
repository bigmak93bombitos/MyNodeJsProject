const Sequelize = require('sequelize');
const { createModels } = require('./Trainers.model');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('postgres', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres'
});
sequelize
  .authenticate()
  .then(db => {
    console.log('Connection has been established successfully.');
    return db;
  })
  .then(db => createModels(sequelize))
  // .then(res => res.findAll())
  // .then( res => console.log(res))
  .then(async models => {
    const { Trainer, Team,Player,Player_teams } = models;

    const trainer = await Trainer.create({
      id:10, 
      firstname: 'TestTrener', lastname: 'TestTrenerLastName',age:20 })
//     .then (created => created.get({
//       plain: true
//     }));
// console.log(trainer);
// console.log(trainer.id);

const team = await Team.create({ name: 'TestTeam', color: 'red',trainer_id:trainer.id })
// .then (created => created.get({
//   plain: true
// }));
// console.log(team);

    const player = await Player.create({firstname: 'TestPlayer', lastname: 'TestPlayerLastName',age:21  })
    // .then (created => created.get({
    //   plain: true
    // }));
    // console.log(player);

    const playerTeams = await Player_teams.create({ player_id:player.id,teams_id:team.id })
//     .then (created => created.get({
//       plain: true
//     }));
// console.log(playerTeams);




  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

