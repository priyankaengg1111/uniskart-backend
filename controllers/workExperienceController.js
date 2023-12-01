'use strict';
var workExperienceModel = require('../models/workExperienceModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        const { organizationName, position, jobProfile, workingFrom, workingUpto, salaryMode, workingHere } = req.body;
        var admin = new workExperienceModel({
            studentId:req.params.id,
            organizationName,
            position,
            jobProfile,
            workingFrom,
            workingUpto,
            salaryMode,
            workingHere,	
        });
        let result =await admin.save();
        return res.status(201).json(result);
    },
    show:async function(req,res){
        try{
            const allData = await workExperienceModel.findOne({
                studentId:req.params.id,
            });
            if (allData!=null) {
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