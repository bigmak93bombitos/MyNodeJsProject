  const sequelize = require('./config.db.js'); 

  const {Trainer} = require("./trainers.model")
  const {Team} = require("./team.model")
  const {Player} = require("./player.model")
  const {PlayerTeams} = require("./playerTeams.model")

  console.log (Trainer);
  console.log (Team);
  console.log (Player);
  console.log (PlayerTeams);

  const modelTrainer = new Trainer(sequelize);
  console.log (modelTrainer);

  const modelTeam = new Team(sequelize);
  console.log (modelTeam);

  const modelPlayer = new Player(sequelize);
  console.log (modelPlayer);

  const modelPlayerTeams = new PlayerTeams(sequelize);
  console.log (modelPlayerTeams);


  modelTrainer.model.hasMany(modelTeam.model, 
            {
              foreignKey:'trainer_id', 
              sourceKey: 'id'
            })
          
  modelTeam.model.belongsToMany(modelPlayer.model, 
            {
              through: 
              modelPlayerTeams.model, 
              foreignKey: 'teams_id', 
              sourceKey: 'id'
            })
          
  modelPlayer.model.belongsToMany(modelTeam.model, 
            {
              through: modelPlayerTeams.model, 
              foreignKey: 'player_id', 
              sourceKey: 'id'
            })

           const main = async () => {
  const createdTrainer = await modelTrainer.insertRow('TestTrener','TestTrenerLastName',20);
  const createdTeam = await modelTeam.insertRow('TestTeamName','TestTeamColor',createdTrainer.id);
  const createdPlayer = await modelPlayer.insertRow('TestPlayer','TestPlayerLastName',22);
  // console.log (createdTeam,createdPlayer);
  await modelPlayerTeams.insertRow(createdPlayer.id,createdTeam.id 
    );
          }
    main();      