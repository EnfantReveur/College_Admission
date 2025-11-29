const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.json({
        message: 'all students'})
})

router.get('/:id', (req, res) => {
    res.json({
        message: 'single student'})
})

router.post('/', (req, res) => {
    res.json({
        message: 'create student'
    })
})

router.patch('/:id', (rreq, res) => {
    res.json({
        message: ' update student'
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        message: 'delete student'
    })
})

module.exports = router