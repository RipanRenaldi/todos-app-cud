import { Todo } from "../model/Todo.js";
import { Publisher } from "../message/Publisher.js";
const publisher = new Publisher();

const createTodo = async(req,res)=>{
    try{
        const {name, description, date, logType} = req.body;
        if(!name || !description){
            return res.status(401).json("Name Or Description is Required");
        }
        const todoCreated = await Todo.create({name, description, date});
        await publisher.publishMessage(logType, todoCreated);
        res.status(201).json({message : "Berhasil Menambahkan Data", todo:todoCreated});
    }catch(e){
        res.status(400).json({message : "Gagal Menambahkan Data"});
    }
}

const updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name, description, date, logType} = req.body;
        if(!name || !description){
            return res.status(401).json("Name Or Description is Required");
        }
        const todoUpdated = await Todo.update({name, description, date}, {where : {id}});
        await publisher.publishMessage(logType,{name, description, date, id});
        todoUpdated ? res.status(201).json({message : "Berhasil Mengubah Data"}) : res.status(401).json({message : "Data Tidak Ditemukan"});
    }catch(e){
        res.status(400).json({message : "Gagal Mengubah Data"});
    }
}

const deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {logType} = req.body;
        const todoDeleted = await Todo.findOne({where : {id}});
        const deletedTodo = await Todo.destroy({where : {id}});
        await publisher.publishMessage(logType, todoDeleted);
        res.status(200).json({message : "Data Berhasil Dihapus", data : todoDeleted});
    }catch(e){
        res.status(400).json({message : "Gagal Menghapus Data"});
    }
}

export {
    createTodo,
    updateTodo,
    deleteTodo
}