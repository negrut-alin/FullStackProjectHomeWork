/**
 * Created by Alin on 13.01.2021.
 */



module.exports =  (connection,Sequelize)=>{
    return connection.define("Project_Feedback",{
           id_feedback:{
               allowNull:false,
               primaryKey:true,
               type:Sequelize.DataTypes.INTEGER
           },
           id_project:{
               allowNull:false,
               type:Sequelize.DataTypes.INTEGER
           },
           mark:{
               allowNull:false,
               type:Sequelize.DataTypes.FLOAT
             },
           comment:{
               allowNull:true,
               type:Sequelize.DataTypes.STRING
           }
    },{
        freezeTableName:true
    });
};