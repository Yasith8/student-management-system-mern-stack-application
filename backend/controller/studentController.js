const StudentModel = require('../models/StudentModel');
const Student = require('../models/StudentModel');
const mongoose = require('mongoose')

//get all students
const getStudents = async(req, res) => {
    //find student without any condition mean all data can get
    //sorting all data ASC 
    const students = await Student.find({}).sort({ createdAt: -1 })
    res.status(200).json(students);
}


//create new student
const addNewStudent = async(req, res) => {
    const { studentNic, firstName, lastName, birthdate, gender, mobileNo, Address, email, isActive } = req.body

    //create empty array for check empty request
    let emptyFields = []

    if (!studentNic) {
        emptyFields.push('studentNic')
    }

    if (!firstName) {
        emptyFields.push('firstName')
    }

    if (!lastName) {
        emptyFields.push('lastName')
    }
    if (!birthdate) {
        emptyFields.push('birthdate')
    }
    if (!gender) {
        emptyFields.push('gender')
    }
    if (!mobileNo) {
        emptyFields.push('mobileNo')
    }
    if (!Address) {
        emptyFields.push('Address')
    }
    if (!email) {
        emptyFields.push('email')
    }
    if (isActive == undefined) {
        emptyFields.push('isActive')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the Field", emptyFields })
    }

    // Convert birthdate to Date object


    //add document to database
    try {
        const parsedBirthdate = new Date(birthdate);
        const student = await StudentModel.create({ studentNic, firstName, lastName, birthdate: parsedBirthdate, gender, mobileNo, Address, email, isActive })
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getStudents,
    addNewStudent
}