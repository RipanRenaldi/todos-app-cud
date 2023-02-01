import express from "express";
import { createTodo, updateTodo, deleteTodo } from "../controller/TodoController.js";
const todoRouter = express.Router();

todoRouter.post('/todos',createTodo);
todoRouter.put("/todos/:id", updateTodo);
todoRouter.delete("/todos/:id", deleteTodo);


export {todoRouter};