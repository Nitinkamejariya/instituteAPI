const passport = require('passport');

const jwtStrategy = require('passport-jwt').Strategy;

const jwtExtract = require('passport-jwt').ExtractJwt;

const Admin = require('../models/Admin');

let opts = {
    jwtFromRequest : jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'Nitin'
}


passport.use(new jwtStrategy(opts,((payLoadData,done)=>{
    Admin.findById(payLoadData._id,(error,admins)=>{
            if(error){
                return done(null,error);
            }
            if(admins){
                return done(null,admins);
            }
            else{
                return done(null,false);
            }
    });
})));

module.exports = passport;