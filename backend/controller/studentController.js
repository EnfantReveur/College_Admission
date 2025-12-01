const mongoose = require('mongoose')
const Student = require('../models/studentsSchema')

const getStudents = async (req, res) =>{
    try {
        const students = await Student.find({}).sort({createdAt: -1})
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json(students)({
            error: error.message
        })
    }
}

const getStudent = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'student no found'
        })
    }
    
    try{
        const student = await Student.findById(id)
        res.status(200).json(student)
    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}
//no validations yet
const createStudent = async (req, res) => {
    const { firstName, middleName, lastName, gender, age, address, contactNumber, email, password } = req.body

    try {
        const student = await Student.create({ firstName, middleName, lastName, gender, age, address, contactNumber, email, password })
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const updateStudent = async (req, res) => {
    const  { id } = req.params
    const { firstName, middleName, lastName, gender, age, address, contactNumber, email, password } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'student not found'
        })
    }
    try{
        const student = await Student.findByIdAndUpdate({_id:id}, { firstName, middleName, lastName, gender, age, address, contactNumber, email, password })
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'student not found'
        })
    }
    try{
        const student = await Student.findByIdAndDelete(id)
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}




module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent

}