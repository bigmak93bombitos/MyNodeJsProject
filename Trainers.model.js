const Sequelize = require('sequelize');

const createTrainer = sequelize => {  
  const Model = Sequelize.Model;


  class Trainers extends Model {}
  Trainers.init({
    // attributes
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
      
    },
  }, {
    sequelize,
    modelName: 'trainers'
    // options
  });
  
  return Trainers;
}

const createPlayer = sequelize => {
  const Model = Sequelize.Model;

class Player extends Model {}
Player.init({
    // attributes
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
    
  },
}, {
  sequelize,
  modelName: 'player'
  // options
});
return Player;
}

const createTeam = sequelize => {
  const Model = Sequelize.Model;

  class Team extends Model {}
  Team.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // attributes
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
    modelName: 'team'
    // options
  });
  return Team;
}

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

const createModels = async sequelize => {
 const Trainer = await createTrainer(sequelize);
 const Team = await createTeam(sequelize);
 const Player = await createPlayer(sequelize);
 const Player_teams = await createPlayer_teams(sequelize);
try {
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

 return {
   Trainer,
   Team,
   Player,
   Player_teams,
 }
}catch(err){
  fatalLog(err)
 }
}

module.exports = {createModels};