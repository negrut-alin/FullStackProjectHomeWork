/**
 * Created by Alin on 13.01.2021.
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const APP = express();

const pathVue = __dirname + "/views/";

APP.use(cors("http://localhost:8081"));

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({
    extended:true
}));
APP.use(express.static(pathVue));

APP.get("/", (req, res) => {
    res.sendFile(pathVue + "index.html"); // Connect Vue with Node.JS
});

const DBConfig = require('./Config/config'); // Import Db Configuration

const Sequelize = require('sequelize'); // Import sequelize

 // Create a connection with DbConfig

   const connection = new Sequelize(DBConfig.DB , DBConfig.USER ,
       DBConfig.PASSWORD ,{
         host:DBConfig.HOST,
         dialect:DBConfig.dialect ,
            pool:{
              max: DBConfig.pool.max,
                min:DBConfig.pool.min,
                idle:DBConfig.pool.idle,
                acquire:DBConfig.pool.acquire}});


    // Connect to DB

    const MyDataBase = {};

      connection.authenticate().then(()=>{
        console.log('Conexiunea cu baza de date a reusit ! ');

          // Get User Model

              MyDataBase.users = require("./Models/User")(connection,Sequelize);
             MyDataBase.projects = require("./Models/Project")(connection,Sequelize);
             MyDataBase.projects_comments = require("./Models/Project_Feedback")(connection,Sequelize);

                 // Set One To Many Association   User to Project

                      MyDataBase.users.hasMany(MyDataBase.projects,{
                             foreignKey:'id_user' , sourceKey:'id'
                      });

                      MyDataBase.projects.belongsTo(MyDataBase.users,{
                          foreignKey:'id_user' , sourceKey:'id'
                      });

                       // Set One To Many Association Project to Project Comments

                          MyDataBase.projects.hasMany(MyDataBase.projects_comments,{
                               foreignKey:'id_project',sourceKey:'id_project'
                          });

                          MyDataBase.projects_comments.belongsTo(MyDataBase.projects,{
                              foreignKey:'id_project',sourceKey:'id_project'
                          });


                      module.exports = MyDataBase;

              connection.sync({force:true}).then(()=>{

                  console.log("S-a resincronizat Baza de date ! ");
              });

          require("./Routes/user.routes")(APP);
          require("./Routes/project.routes")(APP);

          const CONFIGURATION_PORT = {
              PORT:8080
          };

          APP.listen(CONFIGURATION_PORT.PORT,()=>{
              console.log(`Serverul ruleaza pe ${CONFIGURATION_PORT.PORT}....`);
          });


      }).catch((Error)=>{
    console.log(Error);
});