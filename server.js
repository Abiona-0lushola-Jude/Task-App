const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT  = process.env.PORT || 3007
const Tasks = require('./models/task')
// MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('interactive-comment'))
// connecting mongoose

mongoose.connect("mongodb+srv://Abiona:Olushola@cluster0.tnvggcp.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log("DATABASE IS CONNECTED")
})


// Linking  router here
app.post("/post", async (req,res)=>{
    const newTask = new Tasks({
        text: req.body.text,
        time: req.body.time,
        remainder:req.body.remainder,
    })
    try {
        const taskDone = await newTask.save()
    } catch (err) {
        console.log({message: err.message})
    }

})

// sendung data to the frontEnd here
app.get("/get", async (req,res)=>{
    try {
        const allTask =await Tasks.find()
        res.json(allTask)
    } catch (err) {
        console.log(err)
    }
})

// router for deleting 
app.delete("/delete/:id",async (req,res)=>{
    try {
        await Tasks.findByIdAndDelete({_id: req.params.id})
    } catch (err) {
        
    }
})


app.listen(PORT, ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))