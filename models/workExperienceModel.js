const mongoose = require("mongoose");
const WorkExperience = mongoose.model(
    "WorkExperience",
    new mongoose.Schema({
        'studentId': {
            type: mongoose.Schema.Types.ObjectId,
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
module.exports = WorkExperience;