const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser');

let app = express()

////api routes
app.use('/api/v1/resQ/users', userRouter)



module.exports = app