const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
// определяем объект Sequelize
const sequelize = new Sequelize('testdb', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres',
  // operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
 
// определяем модель trainers
const trainers = sequelize.define("trainers", {
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
 
app.set("view engine", "hbs");
 
// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(()=>{
  app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
  });
}).catch(err=>console.log(err));
 
// получение данных
app.get("/", function(req, res){
    trainers.findAll({raw: true }).then(data=>{
      res.render("index.hbs", {
        trainerss: data
      });
    }).catch(err=>console.log(err));
});
 
app.get("/create", function(req, res){
    res.render("create.hbs");
});
 
// добавление данных
app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
         
    const trainersfirstname = req.body.firstname;
    const trainerslastname = req.body.lastname;
    const trainersage = req.body.age;
    trainers.create({ firstname: trainersfirstname,lastname: trainerslastname, age: trainersage}).then(()=>{
      res.redirect("/");
    }).catch(err=>console.log(err));
});
 
// получаем объект по id для редактирования
app.get("/edit/:id", function(req, res){
  const trainersid = req.params.id;
  trainers.findAll({where:{id: trainersid}, raw: true })
  .then(data=>{
    res.render("edit.hbs", {
      trainers: data[0]
    });
  })
  .catch(err=>console.log(err));
});
 
// обновление данных в БД
app.post("/edit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
 
  const trainersname = req.body.name;
  const trainersage = req.body.age;
  const trainersid = req.body.id;
  trainers.update({name:trainersname, age: trainersage}, {where: {id: trainersid} }).then(() => {
    res.redirect("/");
  })
  .catch(err=>console.log(err));
});
 
// удаление данных
app.post("/delete/:id", function(req, res){  
  const trainersid = req.params.id;
  trainers.destroy({where: {id: trainersid} }).then(() => {
    res.redirect("/");
  }).catch(err=>console.log(err));
});