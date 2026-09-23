const USER = require('../model/demo')

exports.viewpage = async(req,res)=>{

    const allData = await USER.find()

    res.render('demo',{allData,editData:null})
    
}

exports.dataCreate = async(req,res)=>{

    const data = req.body

    if(data.id != "")
    {
        await USER.findByIdAndUpdate(data.id,{$set:data})
    }
    else
    {
        await USER.create(data)
    }   

    res.redirect('/')
}

exports.deleteData = async(req,res)=>{
    const deleteid = req.params.id
    console.log(deleteid)
    await USER.findByIdAndDelete(deleteid)
    res.redirect('/')
}

exports.updateDAta = async(req,res)=>{
    const editid = req.params.id
    const editData = await USER.findById(editid)
    const allData = await USER.find()
    res.render('demo',{editData,allData})
}