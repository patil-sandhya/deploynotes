const express = require("express")
const {auth} = require("../Middleware/Auth")
const {NoteModel} = require("../Model/notes.model")

const noteRouter = express.Router()

noteRouter.use(auth)
noteRouter.post("/notes/add", async(req,res)=>{
    const {title,body,userId,userName} = req.body
    try {
        let newbook = new NoteModel({
            title,body,userId,userName
        })

        await newbook.save()
        res.status(200).send({"msg":"Note added", "addedNote": newbook})
    } catch (error) {
        console.log(error);
        res.send({"err": error})
    }
})

noteRouter.get("/notes", async(req,res)=>{
    try {
        let list = await NoteModel.find({userName:req.body.userName})
        res.status(200).send({"notes": list})
    } catch (error) {
        res.send({"err": error})
    }
})


noteRouter.patch("/notes/update/:id", async(req,res)=>{
    let {id} = req.params
    let note = await NoteModel.findOne({_id: id})
    try {
        if(req.body.userId === note.userId){
            await NoteModel.findByIdAndUpdate({_id:id}, req.body)
            res.status(200).send({"msg":"Note has been updated"})
        }else{
            res.status(400).send({"msg":"You are not authorised"})   
        }
        
    } catch (error) {
        res.send({"err": error})
    }
})

noteRouter.delete("/notes/delete/:id", async(req,res)=>{
    let {id} = req.params
    let note = await NoteModel.findOne({_id: id})
    try {
        if(req.body.userId === note.userId){
        await NoteModel.findByIdAndDelete({_id:id}, req.body)
        res.status(200).send({"msg":"Note has been deleted"})
        }else{
            res.status(400).send({"msg": "Not authorised"})
        }
       
    } catch (error) {
        res.send({"err": error})
        
    }
})

module.exports ={
    noteRouter
}