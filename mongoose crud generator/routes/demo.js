const express = require ('express')
const router = express.Router()

const DC = require('../controller/demo')

router.get('/',DC.viewpage)
router.post('/createData',DC.dataCreate)
router.get('/deleteData/:id',DC.deleteData)
router.get('/editData/:id',DC.updateDAta)

module.exports = router