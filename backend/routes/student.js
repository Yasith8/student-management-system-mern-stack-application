const express = require('express');
const router = express.Router();
const { getStudents, addNewStudent } = require('../controller/studentController')



//routes for get all students
router.get('/', getStudents)


//routes for get single student data


//add studet data
router.post('/add', addNewStudent)


//delete student data


//update student data


//export rounter
module.exports = router;