
const Student = require('../models/StudentAdmision');

module.exports.StudentAdmision = async (req,res)=>{
    try {
        Student.findOne({StudentName : req.body.StudentName},(error,studentinfo)=>{
            if(error){
                return res.status(500).json({'message' : "Something Went to wrong",'status' : 500});
            }
            if(studentinfo){
                return res.status(500).json({'message' : "Student Name Already Exist",'status' : 500});
            }
            else{
                Student.create(req.body,(error,studentinfo)=>{
                    if(error){
                        return res.status(500).json({'message' : "Student Detail Not Added",'status' : 500});
                    }
                    if(studentinfo){
                        return res.status(200).json({'message' : "Student Details Added Succssfully",'status' : 200});
                    }
                });
            }
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports.GetAllStudentDetails = async(req,res)=>{
   try {
      Student.find({},(error,infostu)=>{
        if(error){
            return res.status(500).json({'message' : "Student Not Found",'status' : 500});
        }
        if(infostu){

            return res.status(200).json({'message' : "All Student Details Are here",'getdata' : infostu,'status' : 200});
        }
    });
   } catch (error) {
    return res.status(500).json(error);
   }
}

module.exports.RemoveStudentDetails = async(req,res)=>{
    try {
        Student.findById(req.params.id,(error,StudentRecord)=>{
            if(error){
                return res.status(500).json({'message' : "Student Not FOund",'status' : 500});
            }
            if(StudentRecord){
                Student.findByIdAndDelete(StudentRecord.id,(error,data)=>{
                    if(error){
                        return res.status(500).json({'message' : "Student Details Not Remove",'status' : 500});
                    }
                    return res.status(200).json({'message' : "Student Details Remove Succssfully",'status' : 200});
                })
            }
            else{
                return res.status(500).json({'message' : "something Wrong",'status' : 500});
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports.UpdateStudentDetails = async(req,res)=>{
    try {
        Student.findById(req.params.id,(error,StuInfo)=>{
            if(error){
                return res.status(500).json({'message' : "Student Details Not found",'status' : 500});
            }
            if(StuInfo){
                Student.findByIdAndUpdate(StuInfo.id,req.body,(error)=>{
                    if(error){
                        return res.status(500).json({'message' : "Studentetails Not Update",'status' : 500});
                    }
                    return res.status(200).json({'message' : "Student Details Update Succssfuully",'status' : 200});

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

module.exports.GetsingalStudentDetails = async(req,res)=>{
    try {
       var email = req.body.email;
        Student.findOne({email : email},(error,studata)=>{
            if(error){
                return res.status(500).json({'message' : "Student Details Not Found",'status' : 500});
            }
            if(studata){
                return res.status(200).json({'message' : "Student Details Are Here",'data' : studata,'status' : 200});
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
   
}

module.exports.Fetchstudent = async(req,res)=>{

    try {
      await Student.aggregate([
            {
                $match : {email : req.query.email}
            },
            {
                $lookup : {
                    from : 'tbl_faculties',
                    localField : 'facultyId',
                    foreignField : '_id',
                    as : 'facultyData'
                }
            }
        ],((error,studentRecord)=>{
            if(error){
                return res.status(500).json({'message' : "soemthig wrong"});
            }
            return res.status(200).json({'message' : "Details Is Here",'record' : studentRecord});
        }))
    } catch (error) {
        return res.status(500).json(error);
    }
}