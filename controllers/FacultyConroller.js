const Faculty = require('../models/Faculty');

module.exports.AddFaculty = async(req,res)=>{
    try {
        Faculty.findOne({name : req.body.name},(error,facultydata)=>{
            if(error){
                return res.status(500).json({'message' : "Something Wrong",'status' : 500});
            }
            if(facultydata){
                return res.status(500).json({'message' : "Faculty Name Aready Exist",'status' : 500});
            }
            else{
                var pass = Math.random();
                var newpass = parseInt(pass * 1000000);
                Faculty.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : newpass,
                    subject : req.body.subject,
                    salary : req.body.salary
                },(error,facultydata)=>{
                    if(error){
                        return res.status(500).json({'message' : "Faculty Details Not Added",'status' : 500});
                    }
                    if(facultydata){
                        return res.status(200).json({'message' : "Faculty Deatils Added Succssfully",'status' : 200});
                    }
                });
            }
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports.FacultyPersonalDetails =  async(req,res)=>{
    try {
        Faculty.findOne({email : req.body.email},(error,facultyinfo)=>{
            if(error){
                return res.status(500).json({'message' : "Faculty Details Not found",'status' : 500});
            }
            if(facultyinfo){
                return res.status(200).json({'message' : "Faculty Details Are Here",'fdata' : facultyinfo,'status' : 200});
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports.GetFacultuDetails = async(req,res)=>{
    try {
        Faculty.find({},(error,facultyinfo)=>{
            if(error){
                return res.status(500).json({'message' : "Faculty Details Not found",'status' : 500});
            }
            if(facultyinfo){
                return res.status(200).json({'message' : "All Faculty Details Are Here",'faculty' : facultyinfo,'status' : 200});
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports.RemoveFacultyDeatils = async(req,res)=>{
    try {
        Faculty.findById(req.params.id,(error,infofaculty)=>{
            if(error){
                return res.status(500).json({'message' : "Faculty Not found",'status' : 500});
            }
            if(infofaculty){
                Faculty.findByIdAndDelete(infofaculty.id,(error)=>{
                    if(error){
                        return res.status(500).json({'message' : "Faculty Details Not FOund",'status' : 500});
                    }
                    return res.status(200).json({'message' : "Faculty Details Remove Succssfully",'status' : 200});
                });
            }
            else{
                return res.status(500).json({'message' : "Something Wrong",'status' : 500});
            }
        })
    } catch (error) {
        return res.status(500).json(error);     
    }
}

module.exports.UpdateFacultyDetails = async(req,res)=>{
    try {
        Faculty.findById(req.params.id,(error,facultyinfo)=>{
            if(error){
                return res.status(500).json({'message' : "Faculty Details NOt found",'status' : 500});
            }
            if(facultyinfo){
                Faculty.findByIdAndUpdate(facultyinfo.id,req.body,(error)=>{
                    if(error){
                        return res.status(500).json({'message' : "Faculty Details Not Updated",'status' : 500});
                    }
                    return res.status(200).json({'message' : "Faculty Details Update Succssully",'status' : 200});
                })
            }
            else{
                return res.status(500).json({'message' : "Something Wrong",'status' : 500});
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}