const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/INSTITUTE');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Not Connected'));

db.once('open',(error)=>{
    if(error){
        console.log('Database Not Connect');
        return false;
    }
    else {
        console.log('Database Connected Succssfully');
    }
});