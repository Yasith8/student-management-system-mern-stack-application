const express = require('express');
const router = express.Router();
const { getStudents, getSingleStudents, addNewStudent, deleteStudent, removeStudent, studentStatus } = require('../controller/studentController')



//routes for get all students
router.get('/', getStudents)


//routes for get single student data
router.get('/:id', getSingleStudents)


//add studet data
router.post('/add', addNewStudent)

//delete student
router.delete('/:id', deleteStudent)








//export rounter
module.exports = router;