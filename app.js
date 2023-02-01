import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { todoRouter } from "./src/router/TodoRouter.js";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json("application/json"));
app.use(cors(`${process.env.CORS_URL}`));

app.use(todoRouter);

app.listen(Number(process.env.PORT),()=>{
    console.log(`Server Running on PORT ${process.env.PORT}`);
})