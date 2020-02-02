const express = require('express');
const router = express.Router();

const {newItem} = require('../../DataAccess/items/newItem')
const {readItems} = require('../../DataAccess/items/readItems')

router.get('/', async (req, res) => {
    items = await readItems()
    res.send(items)
})

router.post('/', async (req, res) => {
    console.log("post request rcvd")
    let item = req.body
    let postItem = await newItem(item)
    res.send(postItem)
})

router.put('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router