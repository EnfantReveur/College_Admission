const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentsSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: true
    },
    // dateOfBirth: {
    //     type: Date,
    //     required: true
    // },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps:true} )

module.exports = mongoose.model('Student', studentsSchema)
