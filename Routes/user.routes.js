/**
 * Created by Alin on 13.01.2021.
 */


ROUTES = APP =>{
    const USERS = require("../Controllers/user.controll");

    let router = require('express').Router();

        // Create a new User

           router.post("/",USERS.create);

           // Delete a user by id

            router.delete("/:id",USERS.delete);

            // Update  a user by id

            router.put("/:id",USERS.update);


            /// All Query 

            router.get("/",USERS.findUser);            



    APP.use('/api/USERS',router);

};

module.exports = ROUTES;