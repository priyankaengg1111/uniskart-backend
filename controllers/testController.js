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
        const {    greOverallScore,greExaminationDate,greQuantitative,greVerbal,greAnalyticalWriting,gmatOverallScore,gmatExaminationDate,gmatQuantitative,gmatVerbal,gmatAnalyticalWriting,gmatIntegratedReasoning,toeflOverallScore,toeflExaminationDate,toeflReading,toeflListening,toeflSpeaking,toeflWriting,ieltsYetReceive,ieltsTestResultDate,ieltsTRFNo,ieltsIELTSWaiver,ieltsEnglishTwelvethMark,ieltsExaminationDate,ieltsReading,ieltsListening,ieltsSpeaking,ieltsWriting,ieltsOverallScore,pteOverallScore,pteExaminationDate,pteReading,pteListening,pteSpeaking,pteWriting,detOverallScore,detExaminationDate,satOverallScore,satExaminationDate,satReading,satMath,satEssay,actOverallScore,actExaminationDate,actMath,actReading,actScience,actEnglish,actWriting,} = req.body;
        var admin = new testModel({
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
        let result =await admin.save();
        return res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
      }
    },
    /**
     * adminController.remove()
     */
};