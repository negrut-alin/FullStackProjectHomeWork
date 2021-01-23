/**
 * Created by Alin on 13.01.2021.
 */


const myDB  = require('../index'); /// GetDb

const UserModel = myDB.users;




// Create new User


exports.create = (req,res) =>{
    // Validate Request

      if(!req.body.username){
          res.status(400).send({
              message:"Numele de utilizator nu poate fi null !"
          });
      }
      else if(!req.body.email){
          res.status(400).send({
             message:"Adresa de mail nu poate fi null ! "
          });
      }

      else if(!req.body.password){
          res.status(400).send({
              message:"Parola este obligatorie !"
          });
      }
      else{
             // Create a user
              // Save in database

           myDB.users.create({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password
          }).then(() => {
                   res.status(201).send({
                      message:"A fost creat contul cu succes ! "
                   });

          }).catch((Error)=>{
                console.log('Operatiunea a esuat ! ');
           });
      }
};


// Delete a User


exports.delete = (req,res)=>{

      const getId = req.params.id;

       UserModel.destroy({
           where:{
               id:getId
           }}).then(Succes=>{
             if(Succes){
                 res.send({
                     message:"Userul a fost scos din baza de date !"
                 });
             }
              else{
                  res.send({
                     message:"Userul nu exista in baza de date !"
                  });
             }

       }).catch(()=>{
           res.status(500).send({
               message:"Nu s-a putut sterge userul !"
           });
       });
};

// Update a user

exports.update = (req,res)=>{

    const getId = req.params.id;

     UserModel.update(req.body,{
         where:{
             id:getId
         }
     }).then(Succes=>{
         if(Succes){
             res.send({
                 message:"Userul a fost actualizat cu succes !"
             })
         }
         else{
             res.send({
                 message:"Userul nu exista in baza de date ! "
             })
         }
     }).catch(()=>{
         res.status(201).send({
             message:"A intervenit o eroare la actualizarea userului !"
         })
     });
};

// Search for User 

exports.findUser = (req,res)=>{

      if(!req.body.password){
          res.status(400).send({
              message: "Trebuie introdusa si parola !"
          })
      }

      else if(!req.body.username){
         res.status(400).send({
             message:"Trebuie introdus numele de utilizator !"
         });

      }

      UserModel.findOne({
          where:{
             username:req.body.username,
             password:req.body.password
          }
        }).then(Succes =>{
            if(Succes){
           res.send({
              message:"Utilizatorul a fost gasit ! "
           });
        }
          else{
            res.send({
                message:"Utilizatorul nu a fost gasit ! "
             }); 
          } 
        })


}
