
const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
var passport = require('passport');


//----------------------MIDDLEWARES-----------------------
//Body parser middleware - passport returned ad request without this
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
//session middleware
app.use(sessions({
    secret: "secretkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cookieParser("secretkey"));
app.use(passport.initialize())
app.use(passport.session())

const configurePassport=require('./passportConfig')
configurePassport(passport)

const port = 8080

//----------------------ROUTES-----------------------
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//auth routes
app.get('/auth',(req,res)=>{
  res.send('Auth is up!')
})

app.post('/auth/login', passport.authenticate('local') ,(req, res, next)=>{
  console.log(req.user)
  res.status(200).send(req.user)
});

app.get('/auth/isAuthenticated' ,(req, res, next)=>{
  // console.log("user is : ",req)
  if(req.user)
    res.send(req.user)
  else
    res.send(null)
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})