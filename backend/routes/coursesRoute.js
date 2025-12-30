const express = require('express');
const router = express.Router();
const {
    courses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    deleteCourses
} = require('../controller/courseController')


router.get('/', courses)

router.get('/:id', getCourse)

router.post('/', createCourse)

router.patch('/:id', updateCourse)

router.delete('/:id', deleteCourse)

router.delete('/', deleteCourses)

module.exports = router