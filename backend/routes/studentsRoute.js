const express = require('express')
const router = express.Router()
const {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controller/studentController')

router.get('/',getStudents)

router.get('/:id', getStudent)

router.post('/', createStudent)

router.patch('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router