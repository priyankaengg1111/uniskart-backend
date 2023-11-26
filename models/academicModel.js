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
        postGraduationEducationHighestLevel: String,
        postGraduationBtudyLevel: String,
        postGraduationBoardName: String,
        postGraduationInstitutionName: String,
        postGraduationStudyCountry: String,
        postGraduationStudyState: String,
        postGraduationStudyCity: String,
        postGraduationQualificationAchieved: String,
        postGraduationGradingSystem: String,
        postGraduationScore: String,
        postGraduationprimaryLanguage: String,
        postGraduationPtartDate: String,
        postGraduationEndDate: String,
        underGraduationEducationHighestLevel: String,
        underGraduationBtudyLevel: String,
        underGraduationBoardName: String,
        underGraduationInstitutionName: String,
        underGraduationStudyCountry: String,
        underGraduationStudyState: String,
        underGraduationStudyCity: String,
        underGraduationQualificationAchieved: String,
        underGraduationGradingSystem: String,
        underGraduationScore: String,
        underGraduationprimaryLanguage: String,
        underGraduationPtartDate: String,
        underGraduationEndDate: String,
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