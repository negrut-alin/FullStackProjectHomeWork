/**
 * Created by Alin on 14.01.2021.
 */


ROUTES = APP=> {
    const PROJECTS = require('../Controllers/project.controller');

     let router = require('express').Router();

            // Create a new Project

             router.post("/",PROJECTS.create);



             APP.use('/api/PROJECTS',router);
};


module.exports = ROUTES;
