const express = require('express');
const router = express.Router();
const userconttroller = require('../controller/mongocrud')
router.get('/' , userconttroller.home)
router.get('/createData',userconttroller.createData)
router.get('/deleteData/:id',userconttroller.deleteData)
router.get('/editData/:id',userconttroller.editData)
module.exports = router