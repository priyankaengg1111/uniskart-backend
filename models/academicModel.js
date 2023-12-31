const mongoose = require("mongoose");
const Academic = mongoose.model(
    "Academic",
    new mongoose.Schema({
        'studentId': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        },
        educationEducationCountry: String,
        educationEducationHighestLevel: String,
        postGraduationStudyLevel: String,
        postGraduationInstitutionName: String,
        postGraduationStudyCountry: String,
        postGraduationStudyState: String,
        postGraduationStudyCity: String,
        postGraduationQualificationAchieved: String,
        postGraduationGradingSystem: String,
        postGraduationScore: String,
        postGraduationprimaryLanguage: String,
        postGraduationStartDate: String,
        postGraduationEndDate: String,
        underGraduationStudyLevel: String,
        underGraduationInstitutionName: String,
        underGraduationStudyCountry: String,
        underGraduationStudyState: String,
        underGraduationStudyCity: String,
        underGraduationQualificationAchieved: String,
        underGraduationGradingSystem: String,
        underGraduationScore: String,
        underGraduationprimaryLanguage: String,
        underGraduationStartDate: String,
        underGraduationEndDate: String,
        twelvethStudyLevel: String,
        twelvethInstitutionName: String,
        twelvethStudyCountry: String,
        twelvethStudyState: String,
        twelvethStudyCity: String,
        twelvethQualificationAchieved: String,
        twelvethGradingSystem: String,
        twelvethScore: String,
        twelvethprimaryLanguage: String,
        twelvethStartDate: String,
        twelvethEndDate: String,
        tenthStudyLevel: String,
        tenthInstitutionName: String,
        tenthStudyCountry: String,
        tenthStudyState: String,
        tenthStudyCity: String,
        tenthQualificationAchieved: String,
        tenthGradingSystem: String,
        tenthScore: String,
        tenthprimaryLanguage: String,
        tenthStartDate: String,
        tenthEndDate: String,
      
    
    })
);
module.exports = Academic;