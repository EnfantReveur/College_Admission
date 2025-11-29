const express = require('express')
const router = express.Router()
const {
    getStudents,
    getStudent,
    createStudent
} = require('../controller/studentController')

router.get('/',getStudents)

router.get('/:id', getStudent)

router.post('/', createStudent)

router.patch('/:id', (req, res) => {
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