/**
 * Created by Alin on 14.01.2021.
 */


// Import DB

const getDB = require('../index');

const UserTable = getDB.users;
const ProjectTable = getDB.projects;


// Create a project


exports.create = (req,res)=>{

       ProjectTable.create({
           id_user:req.body.id_user,
           title:req.body.title,
           description:req.body.description,
           link_project:req.body.link_project
       }).then(Succes=>{
             res.send({
                message:"Proiectul a fost creat cu succes ! "
             });
       }).catch(()=>{
           res.status(500).send({
              message:"A intervenit o eroare din pacate !"
           });
       })

};
