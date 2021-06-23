var dbConn = require('../../config/db.config')

var Classes= function(classes){
    this.teacher = classes.teacher
    this.date = classes.date
    this.timefrom = classes.timefrom
    this.timeto = classes.timeto
    this.topic = classes.topic
}

//get all classes
Classes.getAllClasses = (result)=>{
    dbConn.query('SELECT * FROM class',(err,res)=>{
        if(err) {
            // console.log('Error while fetching classes')
            result(null,res)
        }else{
            // console.log('fetched classes successfully')
            result(null,res)
        }
    })
}

//get classes of a teacher from db
Classes.getClassesByName = (name,result) =>{
    dbConn.query('SELECT * FROM class WHERE teacher=?',name,(err,res)=>{
        if(err){
            // console.log('failed to fetch teacher classes');
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

//create new class
Classes.createNewClass = (classReqData,result)=>{
    dbConn.query('INSERT INTO class SET ? ',classReqData,(err,res)=>{
        if(err){
            // console.log('error while inserting')
            result(null,err)
        }else{
            // console.log('Class created successfully')
            result(null,res)
        }
    })
}

//delete a class
Classes.deleteClass = (id,result) =>{
    dbConn.query('DELETE FROM class WHERE id=?',[id],(err,res)=>{
        if(err){
            // console.log('Error while deleting a class')
            result(null,err)
        }else{
            result(null,res)
        }
    })

}

module.exports = Classes