const express = require('express')
const router = express.Router()
const DC = require('../controller/demo')
router.get('/',DC.viewPage)
router.get('/test',DC.testPage)
module.exports = router