const express= require('express')
const app= express()
const mysql= require('mysql')
const sql=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'student management'
})
sql.connect((error)=>{
    if(error) throw error
    console.log("Connection success")
})
app.get('/',(req,res)=>{
    var qry =`SELECT * FROM student`
    sql.query(qry,(error,data)=>{
        if(error) throw error
        res.render('index1.ejs',{data})
    })
})
app.get('/createData',(req,res)=>{
    const{name,age}= req.query
    var qry = `INSERT INTO student(name,age) VALUES ('${name}','${age}')`
    sql.query(qry,(error)=>{
        if(error) throw error
        console.log("Data create success")
    })
    res.redirect('/')
})
app.get('/deleteData/:id',(req,res)=>{
    const deleteid=req.params.id

    var qry=`DELETE FROM student WHERE id= '${deleteid}'`
    sql.query(qry,(error)=>{
        if(error) throw error
        console.log("Data Delete Success")
    })
    res.redirect('/')
})
// query
app.get('/editData' , (req , res) => {
    res.redirect('/')
    
})
app.listen(3000)