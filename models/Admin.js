const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    username : {
        type: String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
});

const Admin = mongoose.model('tbl_Admin',AdminSchema);
module.exports = Admin;