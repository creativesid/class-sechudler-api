const mysql = require('mysql')

//MySQL connection
const dbConn = mysql.createConnection({
    host: 'bhnvf8t0zpcvkomu4gxi-mysql.services.clever-cloud.com',
    user: 'uurehtzqutar0jgd',
    password: 'r3mAV7iCd99rMDFytoB0', 
    database: 'bhnvf8t0zpcvkomu4gxi'
})

dbConn.connect(function(error){
    if(error) throw error
    // console.log('DB Connect Successfully')
}) 

module.exports = dbConn