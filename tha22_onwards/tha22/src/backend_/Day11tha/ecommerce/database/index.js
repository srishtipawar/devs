const {Sequelize}=require("sequelize");
const sequelize = new Sequelize(
    "postgres",
    "srishti",
    "1234567",
    {
        host: "localhost",
        dialect: "postgres"
    }

);

sequelize.sync();

(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("connection succesful with db");
    }catch(err){
        console.log("Unable to connect to db");
    }
})();

module.exports = sequelize;