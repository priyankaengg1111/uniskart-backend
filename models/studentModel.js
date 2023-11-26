const mongoose = require("mongoose");

const Student = mongoose.model(
    "Student",
    new mongoose.Schema({
        'agentId': {
            type: Schema.Types.ObjectId,
            ref: 'agent'
        },
        firstName: String,
        middleName: String,
        lastName: String,
        phone: String,
       
        email: String,
   
    })
);

module.exports = Student;