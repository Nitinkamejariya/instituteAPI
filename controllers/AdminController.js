const Admin = require('../models/Admin');

const jwtData = require('jsonwebtoken');

module.exports.AddAdmin = async(req,res)=>{
    try {
        if(req.body.password == req.body.cpass){
            Admin.create(req.body,(error,AdminData)=>{
                if(error){
                    return res.status(500).json({'message' : "Admin Not Added",'status' : 500});
                }
                if(AdminData){
                    return res.status(200).json({'message' : "Admin Succssfully Added",'status' : 200});
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.AdminLogin = (req,res)=>{
    Admin.findOne({email : req.body.email},(error,users)=>{
        if(error){
            return res.status(500).json({'message' : "Email Not found",'status' : 500});
        }
        if(!users || users.password != req.body.password){
            return res.status(500).json({'message' : "Email or password not match",'status':500});
        }
        var token = jwtData.sign(users.toJSON(),'Nitin',{expiresIn : 100000});
        return res.status(200).json({'message' : "Token is generated",'token' : token,'status' : 200});
    });
}
