const express = require('express')
const app = express()
const mongoClient = require('mongodb').MongoClient
const Oi = require('mongodb').ObjectId
const client = new mongoClient('mongodb://payaldonga55_db_user:Cdmi123@ac-7xf6t2d-shard-00-00.y6vnvzc.mongodb.net:27017,ac-7xf6t2d-shard-00-01.y6vnvzc.mongodb.net:27017,ac-7xf6t2d-shard-00-02.y6vnvzc.mongodb.net:27017/?ssl=true&replicaSet=atlas-kyja4r-shard-0&authSource=admin&appName=Cluster0')
client.connect()
.then(()=>{
    console.log("connection success")
})
.catch((error)=>{
    console.log(error)
})
const database = client.db('Student')
const USER = database.collection('data')
app.get('/',async(req,res)=>{
    const data = await USER.find().toArray()
    console.log(data)
    res.render('indexmd.ejs',{data,userData:null})
})
app.get('/createData',async(req,res)=>{
    const data = req.query
    if(data.id!="")
    {
        await USER.updateOne({_id: new Oi(data.id)},{$set:data})
    }
    else
    {
        await USER.insertOne(data)
    }
    res.redirect('/')
})
app.get('/deleteData/:id',async(req,res)=>{
    const deleteid = req.params.id
    await USER.deleteOne({_id: new Oi(deleteid)})
    res.redirect('/')
})
app.get('/editData/:id',async(req,res)=>{
    const editid = req.params.id
    const userData = await USER.findOne({_id:new Oi(editid)})
    const data = await USER.find().toArray()
    console.log("userData====>",userData)
    res.render('indexmd.ejs',{data,userData})
})
app.listen(3000)