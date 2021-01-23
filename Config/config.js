/**
 * Created by Alin on 13.01.2021.
 */


// Create Database Configuration

DatabaseConfig = {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"DestroyerV17%", // No pass
    DB:"MyDataBase" ,
    dialect:"postgres",
    pool:{
     max :5,
        min:0,
        acquire:30000,
        idle:10000
    }
};

module.exports = DatabaseConfig; // Export Configuration