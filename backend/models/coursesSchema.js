const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({

    courseTitle:{
        type: String,
        required: true
    },
    courseDescription:{
        type: String,
        required: true
    },
    coursePrice: {
        type: Number,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Course', courseSchema)