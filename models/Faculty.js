const mongoose = require('mongoose');

const FacultySchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    subject : {
        type : String,
        require : true
    },
    salary : {
        type : Number,
        require : true
    }
});

const Faculty = mongoose.model('tbl_Faculty',FacultySchema);
module.exports = Faculty;
