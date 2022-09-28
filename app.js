const express = require('express');

const port = 9001;

const app = express();

const db = require('./config/mongoose');

const cookieparser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportStrategy = require('./config/passport-local-strategy');
const jwtStrategy = require('./config/passport-jwt-strategy');

app.use(express.urlencoded({extended : true}));

app.use(session({
    name : 'Nitin',
    secret : 'Patel',
    saveUninitialized : false,
    resave : false,
    cookie : {maxAge : 1000*60*100}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthentication);

app.use(cookieparser());

app.use('/',require('./routes'));

app.listen(port,(error)=>{
    if(error){
        console.log('Application Not Running');
        return false;
    }
    else{
        console.log('Application Running On Port:',port);
    }
});