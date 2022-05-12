var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');

var db = require('../db');

passport.use('local',new LocalStrategy((username, password, done)=>{

  var users=db.users
  var user=null
  // console.log(users)

  for(var key in users)
  {
    // console.log(user[key].username , ",", username," :: ", users[key].password,",",password)
    if(users[key].username===username && users[key].password===password)
    {
      user={...users[key]} 
      break
    }
  }
  // console.log(user)
  
  if(user!=null)
  {
    return done(null, user)
  }
  else
  {
    console.log("came here")
    return done(null, false, {message : "incorrect username or passsword"})
  }

}));

passport.serializeUser(function(user, done) {
  // console.log({...user})
  console.log("user serialized")
  done(null, user.username);
});

passport.deserializeUser(function(email, done) {
  console.log("user deserialized : ",user.username)
  return done(null, user)
  // User.findById(id, function(err, user) {
      //     done(err, user);
      // });
  // console.log("i hv been called")
  // studentUser.findOne({email:email}, (err,user)=>{
  //     done(err,user);
  // })
});


var router = express.Router();

//Routes
router.get('/',(req,res)=>{
  res.send('Auth is up!')
})

router.post('/login', passport.authenticate('local') ,(req, res, next)=>{
  
  console.log(req.user)
  res.status(200).send(req.user)

});

module.exports = router;