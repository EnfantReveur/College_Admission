const mongoose = require('mongoose')
const Course = require('../models/coursesSchema')


const courses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such course'})
    }
    
    try {
        const course = await Course.findById(id)
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createCourse = async (req, res) => {
    const { courseTitle, courseDescription, coursePrice } = req.body

    try{
        const course = await Course.create({ courseTitle, courseDescription, coursePrice })
        res.status(200).json(course)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.params
    const { courseTitle, courseDescription, coursePrice } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such course'})
    }

    try{
        const course = await Course.findOneAndUpdate({_id: id}, {
           courseTitle, courseDescription, coursePrice
        })
        res.status(200).json(course)
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}

const deleteCourse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such course'})
    }

    try{
        const course = await Course.findOneAndDelete({_id: id})
        res.status(200).json(course)
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}

const deleteCourses = async (req, res) => {
    try{
        const course = await Course.deleteMany({})
        res.status(200).json(course)
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}


module.exports = {
    courses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    deleteCourses
}
