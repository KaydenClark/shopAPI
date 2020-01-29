const express = require('express');
const cors = require('cors')
const router = express.Router();

const {testConnection} = require('../DataAccess/testConnection')

router.use(cors())
router.use(express.json())

router.use('/items', require('./items/itemsAPI'))

router.get('/', async (req, res) =>{
    let testConn = await testConnection()
    res.send(testConn)
})

module.exports = router