'use strict';
var academicModel = require('../models/academicModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        const { educationEducationCountry, educationEducationHighestLevel, postGraduationStudyLevel, postGraduationInstitutionName, postGraduationStudyCountry, postGraduationStudyState, postGraduationStudyCity, postGraduationQualificationAchieved, postGraduationGradingSystem, postGraduationScore, postGraduationprimaryLanguage, postGraduationStartDate, postGraduationEndDate, underGraduationStudyLevel, underGraduationInstitutionName, underGraduationStudyCountry, underGraduationStudyState, underGraduationStudyCity, underGraduationQualificationAchieved, underGraduationGradingSystem, underGraduationScore, underGraduationprimaryLanguage, underGraduationStartDate, underGraduationEndDate, twelvethStudyLevel, twelvethInstitutionName, twelvethStudyCountry, twelvethStudyState, twelvethStudyCity, twelvethQualificationAchieved, twelvethGradingSystem, twelvethScore, twelvethprimaryLanguage, twelvethStartDate, twelvethEndDate, tenthStudyLevel, tenthInstitutionName, tenthStudyCountry, tenthStudyState, tenthStudyCity, tenthQualificationAchieved, tenthGradingSystem, tenthScore, tenthprimaryLanguage, tenthStartDate, tenthEndDate} = req.body;
        var admin = new academicModel({
            educationEducationCountry,
        educationEducationHighestLevel,
        postGraduationStudyLevel,
        postGraduationInstitutionName,
        postGraduationStudyCountry,
        postGraduationStudyState,
        postGraduationStudyCity,
        postGraduationQualificationAchieved,
        postGraduationGradingSystem,
        postGraduationScore,
        postGraduationprimaryLanguage,
        postGraduationStartDate,
        postGraduationEndDate,
        underGraduationStudyLevel,
        underGraduationInstitutionName,
        underGraduationStudyCountry,
        underGraduationStudyState,
        underGraduationStudyCity,
        underGraduationQualificationAchieved,
        underGraduationGradingSystem,
        underGraduationScore,
        underGraduationprimaryLanguage,
        underGraduationStartDate,
        underGraduationEndDate,
        twelvethStudyLevel,
        twelvethInstitutionName,
        twelvethStudyCountry,
        twelvethStudyState,
        twelvethStudyCity,
        twelvethQualificationAchieved,
        twelvethGradingSystem,
        twelvethScore,
        twelvethprimaryLanguage,
        twelvethStartDate,
        twelvethEndDate,
        tenthStudyLevel,
        tenthInstitutionName,
        tenthStudyCountry,
        tenthStudyState,
        tenthStudyCity,
        tenthQualificationAchieved,
        tenthGradingSystem,
        tenthScore,
        tenthprimaryLanguage,
        tenthStartDate,
        tenthEndDate	
        });
        let result =await admin.save();
        return res.status(201).json(result);
    },
    /**
     * adminController.remove()
     */
};