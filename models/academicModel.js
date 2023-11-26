const mongoose = require("mongoose");
const PersonalInformation = mongoose.model(
    "PersonalInformation",
    new mongoose.Schema({
        'studentId': {
            type: Schema.Types.ObjectId,
            ref: 'student'
        },
        educationEducationCountry: String,
        educationPosition: String,
        twelvethEducationHighestLevel: String,
        twelvethBtudyLevel: String,
        twelvethBoardName: String,
        twelvethInstitutionName: String,
        twelvethStudyCountry: String,
        twelvethStudyState: String,
        twelvethStudyCity: String,
        twelvethQualificationAchieved: String,
        twelvethGradingSystem: String,
        twelvethScore: String,
        twelvethprimaryLanguage: String,
        twelvethPtartDate: String,
        twelvethEndDate: String,
        tenthStudyLevel: String,
        tenthBoardName:String,
        tenthInstituteNamee:String,
        tenthStudyCountry:String,
        tenthStudyState:String,
        tenthStudyCity: String,
        tenthQualificationAchieved: String,
        tenthGradingSystem: String,
        tenthScore: String,
        tenthprimaryLanguage: String,
        tenthPtartDate: String,
        tenthEndDate: String,
    })
);
module.exports = PersonalInformation;