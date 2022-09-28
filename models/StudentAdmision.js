const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    StudentName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    gender : {
        type :String,
        require : true
    },
    course : {
        type : String,
        require : true
    },
    fees : {
        type : Number,
        require : true
    },
    facultyId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'tbl_Faculty'
    }
});

const Student = mongoose.model('tbl_Student',StudentSchema)
module.exports = Student;