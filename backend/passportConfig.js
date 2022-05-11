var LocalStrategy = require('passport-local');
var db = require('./db');


module.exports = function(passport){
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
    console.log("user serialized")
    done(null, user.username);
  });
  
  passport.deserializeUser(function(username, done) {
    console.log("user deserialized : ",username)
    return done(null, username)
  });
}
