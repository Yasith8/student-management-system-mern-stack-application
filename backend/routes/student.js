const express = require('express');
const router = express.Router();
const { getStudents, addNewStudent, deleteStudent, getLogUser, logUser, removeStudent, studentStatus } = require('../controller/studentController')



//routes for get all students
router.get('/', getStudents)


//routes for get single student data


//add studet data
router.post('/add', addNewStudent)


//remove student data(soft delete-delete only from client)
router.patch("delete/:id", deleteStudent)


//remove student data(hard delete-delete from db)
router.delete("remove/:id", removeStudent)


//remove student from vle blocking
router.patch("updatestatus/:id", studentStatus)

//update student data


//for login authentication
router.post("/login", logUser)

router.get("/login", getLogUser)



//export rounter
module.exports = router;