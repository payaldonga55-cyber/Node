const express= require('express')
const app = express()
const mysql = require('mysql')
const sql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'student management'
})
sql.connect((error)=>{
    if(error) throw error
    console.log("connection success")
})
app.get('/',(req,res)=>{
    var qry = `SELECT * FROM student`
    sql.query(qry,(error,data)=>{
        if(error) throw error
        res.render('indexup.ejs',{data,editData:null})
    })
})
app.get('/createData',(req,res)=>{
    const {id,name,age} = req.query
    var qry=""
    if(id!="")
    {
        qry=`UPDATE student SET name = '${name}','${age} WHERE id = '${id}'`
    }
    else
    {
        qry = `INSERT INTO student (name,age) VALUES ('${name}','${age}')`
    }
    sql.query(qry,(error)=>{
        if (error) throw error
        console.log("success")
        res.redirect('/')
    })
})
app.get('/deleteData/:id',(req,res)=>{
    const deleteid= req.params.id
    var qry = `DELETE FROM student WHERE id='${deleteid}'`
    sql.query(qry,(error)=>{
        if(error) throw error
        console.log("Data delete success")
    })
    res.redirect('/')
})
app.get('/editDta/:id',(req,res)=>{
    const editid = req.params.id
    var qry= `SELECT * FROM student WHERE id ='${editid}'`
    var allQry = `SELECT * FROM student`
    sql.query(qry,(error,editData)=>{
        sql.query(allQry,(error,data)=>{
            console.log(editData)
            res.render('indexup.ejs',{data,editData:editData[0]})
        })
    })

})
app.listen(3000)