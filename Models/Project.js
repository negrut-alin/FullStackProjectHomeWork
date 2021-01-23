/**
 * Created by Alin on 13.01.2021.
 */


let PROJECT_MODEL = (connection,Sequelize)=>{

    return connection.define("Project",{

         id_project:{
             autoIncrement:true,
             type:Sequelize.DataTypes.INTEGER,
             primaryKey:true,
             allowNull:false
         },
          id_user:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull:false
          },
         title:{
             type:Sequelize.DataTypes.STRING,
             allowNull:false
         },
         description:{
             type:Sequelize.DataTypes.STRING,
             allowNull:false
         },
         link_project:{
             type:Sequelize.DataTypes.STRING,
             allowNull:false
         },
        final_mark_project:{
             type:Sequelize.DataTypes.FLOAT,
        },
    },{
        freezeTableName:true
    });




};


module.exports = PROJECT_MODEL;