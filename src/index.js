const express = require('express')
const cookieParser = require('cookie-parser')

const {PORT} = require('./constants.js')
const handlebarsConfig = require('../src/config/handlebarsConfig.js')
const expressConfig = require('../src/config/expressConfig.js')
const router = require('./route/router.js')
const app = express()

expressConfig(app)
handlebarsConfig(app)

app.use(cookieParser())

app.use(router)

app.listen(PORT,
    () => { console.log(`server is runing on port ${PORT} !`); }
)