const StudentModel = require('../models/StudentModel');
const Student = require('../models/StudentModel');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//get all students
const getStudents = async(req, res) => {
    //find student without any condition mean all data can get
    //sorting all data ASC 
    const students = await Student.find({}).sort({ createdAt: -1 })
    res.status(200).json(students);
}

//get single
const getSingleStudents = async(req, res) => {
    const student = await Student.findOne();
    res.status(200).json(student)
}


//create new student
const addNewStudent = async(req, res) => {
    //catch data come from request body
    const { studentNic, firstName, lastName, birthdate, gender, mobileNo, Address, email, isActive } = req.body

    //create empty array for check empty request
    let emptyFields = []

    //if any field has empty push values to emptyField array
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

    //if array has data then show this error messege
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the Field", emptyFields })
    }



    //add document to database
    try {
        // Convert birthdate to Date object
        const parsedBirthdate = new Date(birthdate);
        const student = await StudentModel.create({ studentNic, firstName, lastName, birthdate: parsedBirthdate, gender, mobileNo, Address, email, isActive })
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const deleteStudent = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No Student with this ID")
    }

    const student = await Student.findByIdAndDelete({ _id: id })

    if (!student) {
        return res.status(400).json("No student under this id")
    }

    res.status(200).json(student);
}


module.exports = {
    getStudents,
    addNewStudent,
    deleteStudent,
    getSingleStudents
}