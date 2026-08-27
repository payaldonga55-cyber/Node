const express = require('express')
const app=express()
const fs=require('fs')
let arr = []
let editId=null
const readData=fs.readFileSync('data.json','utf-8')
if(readData != "")
{
     arr = JSON.parse(readData)
}
app.get('/',(req,res)=>{
    res.render('index.ejs',{arr,editData:null})
})
app.get('/createData',(req,res)=>
 {
    const data = req.query
    console.log(data);
    if(editId!=null)
    {
        arr[editId]=data
        editId=null
    }
    else
    {
        arr.push(data)
    }
    fs.writeFileSync('data.json',JSON.stringify(arr))
    res.redirect('/')
})  
//params
app.get('/deleteData/:id',(req,res)=>{
    const deleteid=req.params.id
    arr.splice(deleteid,1)
    fs.writeFileSync('data.json',JSON.stringify(arr))
    res.redirect('/')
})
//query
app.get('/editData',(req,res)=>{
    editId=req.query.editId
    console.log(editId);
    const editData = arr[editId]
    res.render('index.ejs',{editData,arr})
})
app.listen(3000)