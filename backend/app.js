
const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const cors = require('cors')
const app = express()
// const auth=require('./routes/auth')
const admin=require('./routes/admin')
const student=require('./routes/student')
const inmate=require('./routes/inmate')
const hod=require('./routes/hod')
const warden=require('./routes/warden')
const staffadvisor=require('./routes/staffadvisor')
const certificates=require('./routes/certificates')
const bodyParser = require('body-parser')
var passport = require('passport');
const {pool} = require('./db')
const bcrypt = require('bcrypt')

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
// app.use(passport.session())

const configurePassport=require('./passportConfig')
configurePassport(passport)

const port = 8080

//----------------------ROUTES-----------------------
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//----------------------auth routes----------------------
app.get('/auth',(req,res)=>{
  res.send('Auth is up!')
})

app.post('/auth/login', passport.authenticate('local') ,(req, res, next)=>{
  console.log(req.user)
  //Uncomment the follwing to use cookie to store username at client
  // res.cookie('user', req.user.username , {signed: true})
  res.status(200).send(req.user)
});

app.post('/logout', function(req, res, next){
  console.log("logout called")
  req.user=null;
  delete req.user
  res.send("success")
});


//passport.session() middleware calls deSerializeUser function and passes the user to req.user if the user is authenticated
app.get('/auth/isAuthenticated' ,passport.session(), (req, res, next)=>{
  console.log("req.user : ",req.session.passport)
  //Uncomment the follwing to retrieve username from the cookie from client browser
  // console.log("cookie is : ",req.signedCookies)
  if(req.user!=undefined)
    res.send(req.user)
  else
    res.send(null)
});
//----------------------End of auth routes----------------------


//----------------------Auth routes--------------------------
app.post('/facultysignup',async (req,res)=>{
  console.log(req.body)
  const saltRounds = 10;
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  const query= await pool.query(`insert into users(user_id,password,name,email,mobile_no,designation,is_admin) values($1,$2,$3,$4,$5,'faculty',FALSE)`,[req.body.penNo,hash,req.body.name,req.body.email,req.body.mobile_no])
  console.log(query)
})

//----------------------admin routes----------------------
app.use('/admin', admin)
//----------------------End of auth routes----------------------

//----------------------student routes----------------------
app.use('/student',student)
//----------------------End of student----------------------

//----------------------inmate routes----------------------
app.use('/inmate',inmate)

app.use('/staffadvisor',staffadvisor)
app.use('/hod',hod)
app.use('/warden',warden)

//----------------------certificate routes----------------------
app.use('/certificates',certificates)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
//----------------------End of student----------------------