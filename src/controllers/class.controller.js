const Classes = require('../models/class.model')
const ClassModel = require('../models/class.model')

//get all classes
exports.getAllClasses = (req,res)=>{
    // console.log('all classes')
    ClassModel.getAllClasses((err,classes)=>{
        // console.log('We are here')
        if(err)
            res.send(err)
            // console.log('Classes',classes)
            res.send(classes)
    })
}

//Get class by Teacher's name
exports.getClassesByName = (req,res)=>{
    // console.log('get classes by Teacher name')
    ClassModel.getClassesByName(req.params.name,(err,classes)=>{
        if(err)
            res.send(err)
            // console.log('Classes By Name',classes)
            res.send(classes)
    })
}

//Add new Class
exports.createNewClass = (req,res)=>{
    // console.log('add new class',req.body)
    const classReqData = new ClassModel(req.body)
    //check null
    if(req.body.contructor===Object && Object.key(req.body).length===0){
        res.send(400).send({success:false,message:'Please fill all fields'})
    }else{
        // console.log('valid data')
        ClassModel.createNewClass(classReqData,(err,classes)=>{
            if(err)
                res.send(err)
                res.json({status:true,message:'Class added successfully',data:classes.insertId})
        })
    }
}

//delete class
exports.deleteClass = (req,res) =>{
    ClassModel.deleteClass(req.params.id,(err,classes)=>{
        if(err)
        res.send(err)
        res.json({success:true,message:'Class deleted successfully'})
    })
}