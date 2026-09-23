const USER = require('../model/demo')

exports.viewpage = async(req,res)=>{

    const allData = await USER.find()

    res.render('demo',{allData})
    
}

exports.createData = async(req,res)=>{

    const data = req.body

    await USER.create(data)

    res.redirect('/')
}