/**
 * Created by Alin on 13.01.2021.
 */


USER_MODEL = (connection,Sequelize)=>{
      return connection.define("User",{
           // Define User Model

              id:{
                  autoIncrement:true,
                 primaryKey:true,
                  allowNull:false,
                  type:Sequelize.DataTypes.INTEGER
              },
              username:{
                  type:Sequelize.DataTypes.STRING,
                  allowNull:false
              },
              email:{
                  type:Sequelize.DataTypes.STRING,
                  allowNull:false
              },
              password:{
                type:Sequelize.DataTypes.STRING,
                  allowNull:false
              },
              membru_juriu:{
                  type:Sequelize.DataTypes.BOOLEAN,
                  defaultValue:false
              },
              profesor:{
                  type:Sequelize.DataTypes.BOOLEAN,
                  defaultValue:false
              }},{freezeTableName:true}); // Additional Param

};


module.exports = USER_MODEL;