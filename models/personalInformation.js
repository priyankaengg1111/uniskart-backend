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
        mailingAddressOne:String,
        mailingAddressTwo:String,
        mailingCountry:String,
        mailingState:String,
        mailingCity:String,
        mailingpincode:String,
        permanentAddressOne:String,
        permanentAddressTwo:String,
        permanentCountry:String,
        permanentState:String,
        permanentCity:String,
        permanentpincode:String,
        passportNumber:String,
        issueDate:String,
        expiryDate:String,
        issueCountry:String,
        birthCity:String,
        birthCountry:String,
        nationality:String,
        citizenship:String,
        moreCountryCitizenship:String,
        moreCountryLiving:String,
        migrationCountry:String,
        medicalCondition:String,
        visaRefusal:String,
        criminal:String,
        emergencyname:String,
        emergencyphone:String,
        emergencyemail:String,
        emergencyrelationWithApplicant:String,
    })
);
module.exports = PersonalInformation;