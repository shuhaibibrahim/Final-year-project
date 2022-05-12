
const express = require('express')
const cors = require('cors')
const app = express()
const auth=require('./routes/auth')
const student=require('./routes/student')

const bodyParser = require('body-parser')

//Body parser middleware - passport returned ad request without this
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = 8080

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//auth routes
app.use('/auth',auth)

//student routes
app.use('/student',student)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})