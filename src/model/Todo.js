import { db } from "../config/db.js";
import { DataTypes } from "sequelize";

const Todo = db.define("todo",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    date : {
        type : DataTypes.DATE,
        defaultValue : DataTypes.NOW,
    },
},{freezeTableName : true, timestamps: false})


export {Todo};