const mongoose = require("mongoose");
const Test = mongoose.model(
    "Test",
    new mongoose.Schema({
        'studentId': {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        },
        greOverallScore: String,
        greExaminationDate: String,
        greQuantitative: String,
        greVerbal: String,
        greAnalyticalWriting: String,
        gmatOverallScore: String,
        gmatExaminationDate: String,
        gmatQuantitative: String,
        gmatVerbal: String,
        gmatAnalyticalWriting: String,
        gmatIntegratedReasoning: String,
        toeflOverallScore: String,
        toeflExaminationDate: String,
        toeflReading: String,
        toeflListening: String,
        toeflSpeaking: String,
        toeflWriting: String,
        ieltsYetReceive: String,
        ieltsTestResultDate: String,
        ieltsTRFNo: String,
        ieltsIELTSWaiver: String,
        ieltsEnglishTwelvethMark: String,
        ieltsExaminationDate: String,
        ieltsReading: String,
        ieltsListening: String,
        ieltsSpeaking: String,
        ieltsWriting: String,
        ieltsOverallScore: String,
        pteOverallScore: String,
        pteExaminationDate: String,
        pteReading: String,
        pteListening: String,
        pteSpeaking: String,
        pteWriting: String,
        detOverallScore: String,
        detExaminationDate: String,
        satOverallScore: String,
        satExaminationDate: String,
        satReading: String,
        satMath: String,
        satEssay: String,
        actOverallScore: String,
        actExaminationDate: String,
        actMath: String,
        actReading: String,
        actScience: String,
        actEnglish: String,
        actWriting: String,
    })
);
module.exports = Test;