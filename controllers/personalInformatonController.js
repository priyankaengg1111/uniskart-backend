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
        const {   dateOfBirth, gender, maritalStatus, mailingAddressOne, mailingAddressTwo, mailingCountry, mailingState, mailingCity, mailingpincode, permanentAddressOne, permanentAddressTwo, permanentCountry, permanentState, permanentCity, permanentpincode, passportNumber, issueDate, expiryDate, issueCountry, birthCity, birthCountry, nationality, citizenship, moreCountryCitizenship, moreCountryCitizenshipNationality, moreCountryLiving, moreCountryLivingNationality, migrationCountry, medicalCondition, medicalConditionSpecify, visaRefusal, visaRefusalCountry, criminal, criminalSpecify, emergencyname, emergencyphone, emergencyemail, emergencyrelationWithApplicant} = req.body;
        var admin = new personalInformatonModel({

            studentId:req.params.id,
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