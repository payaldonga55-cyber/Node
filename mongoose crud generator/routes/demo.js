const express = require ('express')
const router = express.Router()

const DC = require('../controller/demo')

router.get('/',DC.viewpage)
router.post('/createData',DC.createData)

module.exports = router