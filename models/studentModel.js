const mongoose = require("mongoose");
const Student = mongoose.model(
    "Student",
    new mongoose.Schema({
        'agentId': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'agent'
        },
        firstName: String,
        middleName: String,
        lastName: String,
        phone: String,
        email: String,
        createdDate:Date,
        createdBy:String,
        assignedTo:String,
        status:String
    })
);
module.exports = Student;