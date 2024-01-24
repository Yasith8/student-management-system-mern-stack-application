const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');


require('dotenv').config();

const studentRouter = require('./routes/student')


const app = express();

//if port not available use port as 8070
const PORT = process.env.PORT || 8070;

//initialize cors
app.use(cors());
app.use(bodyParser.json());

//assign mongodb url to url bucket
const URL = process.env.MONGO_URL;


app.use("/api/students", studentRouter)

//connect mongodb to backend
mongoose.connect(URL)
    //if url availble and true
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connect to the DB & Backend Listning on port ", PORT)
        })
    })
    //catch errors
    .catch((error) => {
        console.log(error)
    })