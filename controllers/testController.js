'use strict';
var testModel = require('../models/testModel.js');
const jwt = require("jsonwebtoken");


/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        try {
            const { greOverallScore, greExaminationDate, greQuantitative, greVerbal, greAnalyticalWriting, gmatOverallScore, gmatExaminationDate, gmatQuantitative, gmatVerbal, gmatAnalyticalWriting, gmatIntegratedReasoning, toeflOverallScore, toeflExaminationDate, toeflReading, toeflListening, toeflSpeaking, toeflWriting, ieltsYetReceive, ieltsTestResultDate, ieltsTRFNo, ieltsIELTSWaiver, ieltsEnglishTwelvethMark, ieltsExaminationDate, ieltsReading, ieltsListening, ieltsSpeaking, ieltsWriting, ieltsOverallScore, pteOverallScore, pteExaminationDate, pteReading, pteListening, pteSpeaking, pteWriting, detOverallScore, detExaminationDate, satOverallScore, satExaminationDate, satReading, satMath, satEssay, actOverallScore, actExaminationDate, actMath, actReading, actScience, actEnglish, actWriting, } = req.body;
            console.log("finaltestwhthappen", testModel)
            var admin = new testModel({
                studentId: req.params.id,

                greOverallScore,
                greExaminationDate,
                greQuantitative,
                greVerbal,
                greAnalyticalWriting,
                gmatOverallScore,
                gmatExaminationDate,
                gmatQuantitative,
                gmatVerbal,
                gmatAnalyticalWriting,
                gmatIntegratedReasoning,
                toeflOverallScore,
                toeflExaminationDate,
                toeflReading,
                toeflListening,
                toeflSpeaking,
                toeflWriting,
                ieltsYetReceive,
                ieltsTestResultDate,
                ieltsTRFNo,
                ieltsIELTSWaiver,
                ieltsEnglishTwelvethMark,
                ieltsExaminationDate,
                ieltsReading,
                ieltsListening,
                ieltsSpeaking,
                ieltsWriting,
                ieltsOverallScore,
                pteOverallScore,
                pteExaminationDate,
                pteReading,
                pteListening,
                pteSpeaking,
                pteWriting,
                detOverallScore,
                detExaminationDate,
                satOverallScore,
                satExaminationDate,
                satReading,
                satMath,
                satEssay,
                actOverallScore,
                actExaminationDate,
                actMath,
                actReading,
                actScience,
                actEnglish,
                actWriting,
            });
            let result = await admin.save();
            return res.status(201).json(result);
        } catch (err) {
            console.log("thisee", err)
            res.status(500).json(err);
        }
    },
    update: async function (req, res) {
        try {
            console.log("firstid", req.params.id)
            const { greOverallScore, greExaminationDate, greQuantitative, greVerbal, greAnalyticalWriting, gmatOverallScore, gmatExaminationDate, gmatQuantitative, gmatVerbal, gmatAnalyticalWriting, gmatIntegratedReasoning, toeflOverallScore, toeflExaminationDate, toeflReading, toeflListening, toeflSpeaking, toeflWriting, ieltsYetReceive, ieltsTestResultDate, ieltsTRFNo, ieltsIELTSWaiver, ieltsEnglishTwelvethMark, ieltsExaminationDate, ieltsReading, ieltsListening, ieltsSpeaking, ieltsWriting, ieltsOverallScore, pteOverallScore, pteExaminationDate, pteReading, pteListening, pteSpeaking, pteWriting, detOverallScore, detExaminationDate, satOverallScore, satExaminationDate, satReading, satMath, satEssay, actOverallScore, actExaminationDate, actMath, actReading, actScience, actEnglish, actWriting } = req.body;
            const result2 = await testModel.find(
                { studentId: req.params.id });
            console.log("greExaminationDate", greExaminationDate)
            const result = await testModel.updateOne(
                { studentId: req.params.id }, // Specify the condition to identify the document to update
                {
                    $set: {
                        greOverallScore, greExaminationDate, greQuantitative, greVerbal, greAnalyticalWriting, gmatOverallScore, gmatExaminationDate, gmatQuantitative, gmatVerbal, gmatAnalyticalWriting, gmatIntegratedReasoning, toeflOverallScore, toeflExaminationDate, toeflReading, toeflListening, toeflSpeaking, toeflWriting, ieltsYetReceive, ieltsTestResultDate, ieltsTRFNo, ieltsIELTSWaiver, ieltsEnglishTwelvethMark, ieltsExaminationDate, ieltsReading, ieltsListening, ieltsSpeaking, ieltsWriting, ieltsOverallScore, pteOverallScore, pteExaminationDate, pteReading, pteListening, pteSpeaking, pteWriting, detOverallScore, detExaminationDate, satOverallScore, satExaminationDate, satReading, satMath, satEssay, actOverallScore, actExaminationDate, actMath, actReading, actScience, actEnglish, actWriting
                    }
                }
            );
            // if (result.nModified > 0) {
            return res.status(201).json({ message: 'Document updated successfully.' });
            // } else {
            //     console.log("great error")
            //     return res.status(404).json({ message: 'No document found or no modifications made.' });
            // }
        } catch (err) {
            console.log("myer", err);
            return res.status(500).json({
                error: err.message
            });
        }
    },
    show: async function (req, res) {
        try {
            const allData = await testModel.findOne({
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