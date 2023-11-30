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
    show:async function(req,res){
        console.log("ji ji")
        try{
            console.log("wahthahs")
            const allData = await personalInformatonModel.findOne({
                studentId:req.params.id,
            });
            console.log("lst",allData)

            if (allData!=null) {
                console.log("ramram",allData)
                res.status(200).json({ 
                    status:true,
                    data: allData });
            }else{
                res.status(200).json({ 
                    status:true,
                    data: 'noData' });
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
    /**
     * adminController.remove()
     */
};