//import the ongoose pakage and assign to mongoose
const mongoose = require("mongoose");

//create db structure
const Schema = mongoose.Schema;


const studentSchema = new Schema({
        studentNic: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        birthdate: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        mobileNo: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    //when document was created add app property 
    // When a document is created, add 'createdAt' and 'updatedAt' timestamps
    { timestamps: true }
)




module.exports = mongoose.model('student', studentSchema)