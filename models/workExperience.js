const mongoose = require("mongoose");

const PersonalInformation = mongoose.model(
    "PersonalInformation",
    new mongoose.Schema({
        'studentId': {
            type: Schema.Types.ObjectId,
            ref: 'student'
        },
        organizationName: String,
        position: String,

        jobProfile: String,
        workingFrom: String,
        workingUpto: String,
        salaryMode: String,
        workingHere: String,

      
   
    })
);

module.exports = PersonalInformation;