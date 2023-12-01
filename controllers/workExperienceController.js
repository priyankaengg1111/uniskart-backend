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
    update: async function (req, res) {
        try {
          const { organizationName, position, jobProfile, workingFrom, workingUpto, salaryMode, workingHere } = req.body;
          const result = await workExperienceModel.updateOne(
            { studentId: req.params.id },
            { $set: { organizationName, position, jobProfile, workingFrom, workingUpto, salaryMode, workingHere } }
          );
          return res.status(201).json({ message: 'Document updated successfully.' });
         
        } catch (err) {
          console.log("myer", err);
          return res.status(500).json({
            error: err.message
          });
        }
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