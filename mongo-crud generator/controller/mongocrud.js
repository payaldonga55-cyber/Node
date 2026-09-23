const app = require('../app')

const mongoClient = require('mongodb').MongoClient
const OI = require('mongodb').ObjectId;
const client = new mongoClient('mongodb://payaldonga55_db_user:Cdmi123@ac-7xf6t2d-shard-00-00.y6vnvzc.mongodb.net:27017,ac-7xf6t2d-shard-00-01.y6vnvzc.mongodb.net:27017,ac-7xf6t2d-shard-00-02.y6vnvzc.mongodb.net:27017/?ssl=true&replicaSet=atlas-kyja4r-shard-0&authSource=admin&appName=Cluster0')
client.connect()
.then(()=>{
  console.log("Connection Success")
})
.catch((error)=>{
  console.log(error)
})
const database = client.db('Student')
const USER = database.collection('data')
exports.home =  async(req, res) => {
    const data = await USER.find().toArray();
    res.render('mongocrud.ejs',{data , userData : null});
}

exports.createData = async (req, res) => {
    const data = req.query;
    if(data.id != '')
    {
        await USER.updateOne({_id : new OI(data.id)} , {$set : data});
    }
    else
    {
        await USER.insertOne(data);
    }
    res.redirect('/crud')
}

exports.deleteData = async(req, res) => {
    const deleteId = req.params.id
    await USER.deleteOne({ _id: new OI(deleteId)})
    res.redirect('/crud')

}

exports.editData = async(req, res) => {
        const editId = req.params.id
    const userData = await USER.findOne({_id : new OI(editId)})
    const data = await USER.find().toArray()
    console.log("userData ==> ==> ",userData); 
    res.render('mongocrud.ejs' , {userData , data})
}