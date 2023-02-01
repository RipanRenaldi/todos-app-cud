import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect : "mysql"
})
db.authenticate()
.then(()=>{
    console.log("Connected To Database")
})
.catch(()=>{
    console.log("Error To Connect Database");
    db.close();
})

export {db};