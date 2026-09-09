const express = require('express')
const app = express()
const mysql = require('mysql')
const sql = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password : '',
    database : 'student management'
})

sql.connect((error) => {
    if(error) throw error
    console.log("Connection success");
})


app.get('/',(req , res) => {
    
    var qry = `SELECT * FROM account`
    sql.query(qry , (error , data) => {
        if(error) throw error
        res.render('indexup.ejs',{data , editData : null})
    })

})


app.get('/createData' , (req , res) => {
    const {id, name, age} = req.query

    var qry = ''

    if(id != '')
    {
        qry = `UPDATE account SET name = '${name}' , age='${age}' WHERE id='${id}'`
    }
    else
    {
        qry = `INSERT INTO account (name, age) VALUES ('${name}' , '${age}')`
    }

    sql.query(qry , (error) => {
        if(error) throw error
        console.log("Success");
    })
    
    res.redirect('/')
    
})

// params
app.get('/deleteData/:id' , (req , res) => {
    const deleteId = req.params.id

    var qry = `DELETE FROM account WHERE id='${deleteId}'`

    sql.query(qry , (error) => {
        if(error) throw error
        console.log("Data delete success");
    })

    res.redirect('/')

})

// query
app.get('/editData/:id' , (req , res) => {

    const editId = req.params.id

    var qry = `SELECT * FROM account WHERE id='${editId}'`

    var allQry = `SELECT * FROM account`

    sql.query(qry , (error , editData) => {
        sql.query(allQry , (error , data) => {
            console.log(editData);
            
            res.render('indexup.ejs', { data, editData: editData[0]})
        })
    })

    
    
})


app.listen(3000)   