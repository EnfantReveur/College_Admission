const express = require('express')
require('dotenv').config()
const router = require('./routes/coursesRoute')
const mongoose = require ('mongoose')

//express app
const app = express()

//middlewarex`
app.use(express.json())

//connected to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT, "and connected to db")
})
})
.catch((error) => {
    console.log(error)
})

//routes
app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/api/courses', router)

