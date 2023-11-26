const mongoose = require("mongoose");

const PersonalInformation = mongoose.model(
    "PersonalInformation",
    new mongoose.Schema({
        'studentId': {
            type: Schema.Types.ObjectId,
            ref: 'student'
        },
        dateOfBirth: String,
        gender: String,

        maritalStatus: String,
      
   
    })
);

module.exports = PersonalInformation;