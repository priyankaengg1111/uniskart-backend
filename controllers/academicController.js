'use strict';
var academicModel = require('../models/academicModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        try {
            console.log("getvalue")
            const { educationEducationCountry, educationEducationHighestLevel, postGraduationStudyLevel, postGraduationInstitutionName, postGraduationStudyCountry, postGraduationStudyState, postGraduationStudyCity, postGraduationQualificationAchieved, postGraduationGradingSystem, postGraduationScore, postGraduationprimaryLanguage, postGraduationStartDate, postGraduationEndDate, underGraduationStudyLevel, underGraduationInstitutionName, underGraduationStudyCountry, underGraduationStudyState, underGraduationStudyCity, underGraduationQualificationAchieved, underGraduationGradingSystem, underGraduationScore, underGraduationprimaryLanguage, underGraduationStartDate, underGraduationEndDate, twelvethStudyLevel, twelvethInstitutionName, twelvethStudyCountry, twelvethStudyState, twelvethStudyCity, twelvethQualificationAchieved, twelvethGradingSystem, twelvethScore, twelvethprimaryLanguage, twelvethStartDate, twelvethEndDate, tenthStudyLevel, tenthInstitutionName, tenthStudyCountry, tenthStudyState, tenthStudyCity, tenthQualificationAchieved, tenthGradingSystem, tenthScore, tenthprimaryLanguage, tenthStartDate, tenthEndDate } = req.body;
            var admin = new academicModel({

                studentId: req.params.id,

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
            let result = await admin.save();
            return res.status(201).json(result);
        } catch (err) {
            console.log("this is", err)
            res.status(500).json(err);
        }
    },
    update: async function (req, res) {
        try {
            const { educationEducationCountry, educationEducationHighestLevel, postGraduationStudyLevel, postGraduationInstitutionName, postGraduationStudyCountry, postGraduationStudyState, postGraduationStudyCity, postGraduationQualificationAchieved, postGraduationGradingSystem, postGraduationScore, postGraduationprimaryLanguage, postGraduationStartDate, postGraduationEndDate, underGraduationStudyLevel, underGraduationInstitutionName, underGraduationStudyCountry, underGraduationStudyState, underGraduationStudyCity, underGraduationQualificationAchieved, underGraduationGradingSystem, underGraduationScore, underGraduationprimaryLanguage, underGraduationStartDate, underGraduationEndDate, twelvethStudyLevel, twelvethInstitutionName, twelvethStudyCountry, twelvethStudyState, twelvethStudyCity, twelvethQualificationAchieved, twelvethGradingSystem, twelvethScore, twelvethprimaryLanguage, twelvethStartDate, twelvethEndDate, tenthStudyLevel, tenthInstitutionName, tenthStudyCountry, tenthStudyState, tenthStudyCity, tenthQualificationAchieved, tenthGradingSystem, tenthScore, tenthprimaryLanguage, tenthStartDate, tenthEndDate } = req.body;

            const result = await academicModel.updateOne(
                { studentId: req.params.id },
                { $set: { educationEducationCountry, educationEducationHighestLevel, postGraduationStudyLevel, postGraduationInstitutionName, postGraduationStudyCountry, postGraduationStudyState, postGraduationStudyCity, postGraduationQualificationAchieved, postGraduationGradingSystem, postGraduationScore, postGraduationprimaryLanguage, postGraduationStartDate, postGraduationEndDate, underGraduationStudyLevel, underGraduationInstitutionName, underGraduationStudyCountry, underGraduationStudyState, underGraduationStudyCity, underGraduationQualificationAchieved, underGraduationGradingSystem, underGraduationScore, underGraduationprimaryLanguage, underGraduationStartDate, underGraduationEndDate, twelvethStudyLevel, twelvethInstitutionName, twelvethStudyCountry, twelvethStudyState, twelvethStudyCity, twelvethQualificationAchieved, twelvethGradingSystem, twelvethScore, twelvethprimaryLanguage, twelvethStartDate, twelvethEndDate, tenthStudyLevel, tenthInstitutionName, tenthStudyCountry, tenthStudyState, tenthStudyCity, tenthQualificationAchieved, tenthGradingSystem, tenthScore, tenthprimaryLanguage, tenthStartDate, tenthEndDate } }
            );
            return res.status(201).json({ message: 'Document updated successfully.' });

        } catch (err) {
            console.log("myer", err);
            return res.status(500).json({
                error: err.message
            });
        }
    },
    show: async function (req, res) {
        try {
            const allData = await academicModel.findOne({
                studentId: req.params.id,
            });
            if (allData != null) {
                res.status(200).json({
                    status: true,
                    data: allData
                });
            } else {
                res.status(200).json({
                    status: true,
                    data: 'noData'
                });
            }
        } catch (err) {

            res.status(500).json(err);
        }
    }
    /**
     * adminController.remove()
     */
};