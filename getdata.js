const express = require('express')
const app = express()
const alldata=[{name:"Demo1",s1:75,s2:86,s3:69,s4:73,s5:91},{name:"Demo2",s1:89,s2:75,s2:65,s3:81,s4:74,s5:59}]
app.get('/result',(req,res)=>{    
    res.render('getdata.ejs',{alldata})
})
app.listen(3000)