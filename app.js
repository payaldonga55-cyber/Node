const express = require('express')
const app = express()


app.get('/',(req , res) => {
    // res.send("Hello")
    res.render('index.ejs')
})
app.get('/about' , (req , res) => {
    // res.send("This is about page")
    res.render('about.ejs')
})
app.get('/contact',(req , res) => {
    res.redirect('/')
})

app.listen(3000)
