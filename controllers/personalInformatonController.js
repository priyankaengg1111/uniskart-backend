'use strict';
var personalInformatonModel = require('../models/personalInformatonModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        try {
            // req.params.id
            const { dateOfBirth, gender, maritalStatus, mailingAddressOne, mailingAddressTwo, mailingCountry, mailingState, mailingCity, mailingpincode, permanentAddressOne, permanentAddressTwo, permanentCountry, permanentState, permanentCity, permanentpincode, passportNumber, issueDate, expiryDate, issueCountry, birthCity, birthCountry, nationality, citizenship, moreCountryCitizenship, moreCountryCitizenshipNationality, moreCountryLiving, moreCountryLivingNationality, migrationCountry, medicalCondition, medicalConditionSpecify, visaRefusal, visaRefusalCountry, criminal, criminalSpecify, emergencyname, emergencyphone, emergencyemail, emergencyrelationWithApplicant } = req.body;
            var admin = new personalInformatonModel({
                studentId: req.params.id,
                dateOfBirth,
                gender,
                maritalStatus,
                mailingAddressOne,
                mailingAddressTwo,
                mailingCountry,
                mailingState,
                mailingCity,
                mailingpincode,
                permanentAddressOne,
                permanentAddressTwo,
                permanentCountry,
                permanentState,
                permanentCity,
                permanentpincode,
                passportNumber,
                issueDate,
                expiryDate,
                issueCountry,
                birthCity,
                birthCountry,
                nationality,
                citizenship,
                moreCountryCitizenship,
                moreCountryCitizenshipNationality,
                moreCountryLiving,
                moreCountryLivingNationality,
                migrationCountry,
                medicalCondition,
                medicalConditionSpecify,
                visaRefusal,
                visaRefusalCountry,
                criminal,
                criminalSpecify,
                emergencyname,
                emergencyphone,
                emergencyemail,
                emergencyrelationWithApplicant,
            });
            let result = await admin.save();
            return res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async function (req, res) {
        try {
            console.log("firstid", req.params.id)
            const { dateOfBirth, gender, maritalStatus, mailingAddressOne, mailingAddressTwo, mailingCountry, mailingState, mailingCity, mailingpincode, permanentAddressOne, permanentAddressTwo, permanentCountry, permanentState, permanentCity, permanentpincode, passportNumber, issueDate, expiryDate, issueCountry, birthCity, birthCountry, nationality, citizenship, moreCountryCitizenship, moreCountryCitizenshipNationality, moreCountryLiving, moreCountryLivingNationality, migrationCountry, medicalCondition, medicalConditionSpecify, visaRefusal, visaRefusalCountry, criminal, criminalSpecify, emergencyname, emergencyphone, emergencyemail, emergencyrelationWithApplicant } = req.body;
            const result2 = await personalInformatonModel.find(
                { studentId: req.params.id });
            console.log("result2", result2)
            const result = await personalInformatonModel.updateOne(
                { studentId: req.params.id }, // Specify the condition to identify the document to update
                {
                    $set: {
                        dateOfBirth, gender, maritalStatus, mailingAddressOne, mailingAddressTwo, mailingCountry, mailingState, mailingCity, mailingpincode, permanentAddressOne, permanentAddressTwo, permanentCountry, permanentState, permanentCity, permanentpincode, passportNumber, issueDate, expiryDate, issueCountry, birthCity, birthCountry, nationality, citizenship, moreCountryCitizenship, moreCountryCitizenshipNationality, moreCountryLiving, moreCountryLivingNationality, migrationCountry, medicalCondition, medicalConditionSpecify, visaRefusal, visaRefusalCountry, criminal, criminalSpecify, emergencyname, emergencyphone, emergencyemail, emergencyrelationWithApplicant 
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
            const allData = await personalInformatonModel.findOne({
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