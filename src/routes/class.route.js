const express = require('express')
const router = express.Router()

const classController = require('../controllers/class.controller') 

//get all classes
router.get('/',classController.getAllClasses) 

//get all classes of a particular teacher
router.get('/:name',classController.getClassesByName)

//create new class
router.post('/',classController.createNewClass)

//delete a class
router.delete('/:id',classController.deleteClass)

module.exports = router